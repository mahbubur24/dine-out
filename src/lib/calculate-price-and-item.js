export function findTotal(orderItems) {
  let totalAmount = 0;
  let totalItems = 0;

  for (const item of orderItems) {
    totalAmount += item.price * item.quantity;
    totalItems += item.quantity;
  }

  return { totalAmount, totalItems };
}
