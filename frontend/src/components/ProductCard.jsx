import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-full object-cover rounded-lg"
      />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">Rs. {product.price}</p>
      <div className="flex flex-row space-x-4">
        <button
          className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button className="mt-3 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
