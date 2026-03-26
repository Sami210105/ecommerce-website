import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map(item => (
          <div
            key={item._id}
            className="bg-white p-4 rounded shadow mb-2"
          >
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
            <p>Qty: {item.qty}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;