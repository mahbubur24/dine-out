import Chicken from "../assets/Chicken.svg";
import Hamburger from "../assets/Hamburger.svg";
import Pizza from "../assets/Pizza.svg";
import Submarine from "../assets/Submarine.svg";

const orderItems = [
  { id: 1, name: "Hamburger", price: 300, quantity: 0, image: Hamburger },
  { id: 2, name: "Chicken Nuggets", price: 300, quantity: 0, image: Chicken },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: 300,
    quantity: 0,
    image: Submarine,
  },
  { id: 4, name: "Pizza slices", price: 300, quantity: 0, image: Pizza },
];

export { orderItems };
