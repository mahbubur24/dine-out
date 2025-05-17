import { useState } from "react";
import OrderRow from "./order-list-item";

export default function OrderReports({ orders, onDelete, onDeliver }) {
  const [filter, setFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true;
    return order.status === filter.toUpperCase();
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-funnel-icon lucide-funnel"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>

      <div className="bg-cardbg rounded-lg p-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm">
              <th className="pb-3 font-medium">ID</th>
              <th className="pb-3 font-medium">Customer Name</th>
              <th className="pb-3 font-medium">Items</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-400">
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <OrderRow
                  key={order.id}
                  order={order}
                  onDelete={onDelete}
                  onDeliver={onDeliver}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
