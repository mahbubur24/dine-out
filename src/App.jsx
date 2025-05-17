import { useState } from "react";
import Header from "./components/Header";
import OrderReports from "./components/Order/order-reports";
import OrderSummary from "./components/Order/order-summary";
import CreateOrder from "./components/create-order";

export default function App() {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    const createNewOrder = {
      id: orders.length + 1,
      customerName: newOrder.customerName,
      items: newOrder.items,
      amount: newOrder.amount,
      status: "PENDING",
    };
    setOrders([...orders, createNewOrder]);
  };

  const handleDelete = (id) => {
    setOrders((prevOrders = []) => {
      const updatedOrders = prevOrders.filter((order) => order.id !== id);
      return updatedOrders;
    });
  };

  const handleDeliver = (id) => {
    setOrders((prevOrders = []) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === id ? { ...order, status: "DELIVERED" } : order
      );
      return updatedOrders;
    });
  };

  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder onAddOrder={handleAddOrder} />

          <div className="col-span-1 md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary orders={orders} />
            <OrderReports
              orders={orders}
              onDelete={handleDelete}
              onDeliver={handleDeliver}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
