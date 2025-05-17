export default function CustomerName({ name, setName }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Customer Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-background bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
      />
    </div>
  );
}
