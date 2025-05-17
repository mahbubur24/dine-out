import FoodItem from "./food-item";

export default function ItemSelector({
  setTotal,
  selectedItems,
  handleAdd,

  handleRemove,
}) {
  const updateTotalAndItems = (updatedQuantities) => {
    const total = Object.entries(updatedQuantities).reduce(
      (sum, [name, qty]) => {
        const item = itemsData.find((item) => item.name === name);
        return sum + item.price * qty;
      },
      0
    );
    setTotal(total);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>

      <div className="items-container">
        {selectedItems.map((item) => (
          <FoodItem
            key={item.id}
            item={item}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}
