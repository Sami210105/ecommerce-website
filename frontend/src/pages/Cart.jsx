import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pt-20">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="bg-gray-50 p-3 rounded mb-2">
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
              <p>Qty: {item.qty}</p>
            </div>
          ))
        )}

        <div className="mt-4">
          <h2>Total Items: {totalItems}</h2>
          <h2>Total Price: ₹{totalPrice}</h2>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
