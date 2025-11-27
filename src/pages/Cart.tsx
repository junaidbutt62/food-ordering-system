import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";

const CartScreen: React.FC = () => {
  const cart = useSelector((state: any) => state.cart) as any[];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateQty = (id: number, type: "inc" | "dec") => {
    if (type === "inc") dispatch(increaseQty(id));
    else dispatch(decreaseQty(id));
  };

  // Calculate total bill
  const total = cart
    .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  // Shorten description to 10 words
  const shortDesc = (text: string) => {
    const words = (text || "").split(" ");
    return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/")}
          className=" px-3 py-2 rounded-lg text-amber-400 text-4xl hover:scale-150 transition-transform duration-300"
        >
          ← 
        </button>
        <h2 className="text-3xl font-bold text-center text-amber-400">🛒 Your Cart</h2>
        <div />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.length === 0 && (
            <p className="text-center text-gray-600">Your cart is empty</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow-md p-4 rounded-xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  {shortDesc(item.description)}
                </p>
                <p className="text-amber-400 font-bold mt-1">${item.price}</p>
              </div>

              {/* Quantity Controller */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQty(item.id, "dec")}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, "inc")}
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 px-3 py-1 bg-red-400 text-white rounded-lg hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total + Checkout */}
        <div className="bg-white shadow-md p-6 rounded-xl h-fit">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Items:</span>
            <span className="font-semibold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-700">Total Bill:</span>
            <span className="text-amber-400 text-xl font-bold">${total}</span>
          </div>

          <button className="w-full bg-amber-400 text-white py-3 rounded-xl mt-2 hover:bg-amber-500 transition text-lg font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;