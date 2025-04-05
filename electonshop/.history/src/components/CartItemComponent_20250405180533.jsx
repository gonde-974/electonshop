import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice"; // <-- замени ја патеката ако е различна

function CartItemComponent({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="w-full mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl border-b border-gray-300 dark:border-gray-700 transition-all hover:shadow-2xl">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] items-center gap-4 p-4">
        {/* Product Info */}
        <div className="flex items-center gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="hidden md:block w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              На залиха: <span className="font-bold text-green-600 dark:text-green-400">{item.stock}</span>
            </p>
          </div>
        </div>

        {/* Product Price */}
        <div className="text-center text-lg font-semibold text-gray-800 dark:text-white">
          ${item.price.toFixed(2)}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md">
          <button
            className="text-lg font-bold px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            onClick={handleIncrease}
          >
            +
          </button>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.count}</span>
          <button
            className="text-lg font-bold px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            onClick={handleDecrease}
          >
            -
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-center text-lg font-semibold text-gray-900 dark:text-white">
          ${(item.price * item.count).toFixed(2)}
        </div>

        {/* Remove Button */}
        <button
          className="p-2 md:p-3 rounded-full bg-red-500/10 dark:bg-red-600/10 
          text-red-500 dark:text-red-400 hover:bg-red-500/30 hover:text-red-600 
          dark:hover:bg-red-600/30 dark:hover:text-red-500 transition 
          flex items-center justify-center shadow-md hover:shadow-lg"
          onClick={handleRemove}
        >
          <RxCross2 className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default CartItemComponent;
