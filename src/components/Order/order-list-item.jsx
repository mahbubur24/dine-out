export default function OrderListItem({ order, onDelete, onDeliver }) {
  const { id, customerName, items, amount, status } = order;

  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span
          className={status === "DELIVERED" ? "text-green-500" : "text-red-500"}
        >
          {status}
        </span>
      </td>
      <td className="py-3">
        <button
          onClick={() => onDelete(id)}
          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
        >
          Delete
        </button>

        {status === "PENDING" && (
          <button
            onClick={() => onDeliver(id)}
            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
          >
            DELIVER
          </button>
        )}
      </td>
    </tr>
  );
}
