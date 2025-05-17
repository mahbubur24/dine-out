import { useState } from "react";

import { findTotal } from "../lib/calculate-price-and-item";
import { orderItems } from "../lib/data";
import CustomerName from "./Order/customer-name";
import ItemSelector from "./Order/item-selector";

export default function CreateOrder({ onAddOrder }) {
  const [customerName, setCustomerName] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState([...orderItems]);

  const handleAddItem = (newItem) => {
    const index = selectedItems?.findIndex((item) => item.id === newItem.id);
    if (index !== -1) {
      // Item already in selectedItems, increase quantity
      const updatedItems = [...selectedItems];
      updatedItems[index] = {
        ...updatedItems[index],
        quantity: updatedItems[index].quantity + 1,
      };
      setSelectedItems(updatedItems);

      const { totalAmount } = findTotal(updatedItems);
      setTotal(totalAmount);
    } else {
      // Item not in selectedItems, add with quantity 1
      const updatedItems = [...selectedItems, { ...newItem, quantity: 1 }];
      setSelectedItems(updatedItems);

      const { totalAmount } = findTotal(updatedItems);
      setTotal(totalAmount);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    const index = selectedItems.findIndex(
      (item) => item.id === itemToRemove.id
    );

    if (index !== -1) {
      const updatedItems = [...selectedItems];
      const currentItem = updatedItems[index];

      if (currentItem.quantity > 0) {
        // Decrease quantity by 1
        updatedItems[index] = {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        };
        setSelectedItems(updatedItems);
        const { totalAmount } = findTotal(updatedItems);
        setTotal(totalAmount);
      }
    }
  };

  const handleSubmitOrder = () => {
    const { totalAmount, totalItems } = findTotal(selectedItems);
    if (!customerName) {
      alert("Please enter a customer name");
      return;
    }

    if (!totalItems) {
      alert("Please at least one item");
      return;
    }

    const NewOrderItem = {
      customerName,
      amount: totalAmount,
      items: totalItems,
    };

    onAddOrder(NewOrderItem);
    setTotal(0);
    setCustomerName("");
    setSelectedItems([...orderItems]);
  };

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <CustomerName name={customerName} setName={setCustomerName} />

      <ItemSelector
        selectedItems={selectedItems}
        setTotal={setTotal}
        setItems={setSelectedItems}
        handleAdd={handleAddItem}
        handleRemove={handleRemoveItem}
      />

      <button
        onClick={handleSubmitOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {total})
      </button>
    </div>
  );
}
