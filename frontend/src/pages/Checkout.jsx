import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex justify-center pt-20">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-bold mb-4">Checkout</h1>

        <p>Total Amount: ₹{totalPrice}</p>

        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
