import React from 'react';
import { RxCross2 } from "react-icons/rx";

function CartItemComponent({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="w-full  mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700 transition-all hover:shadow-2xl">

     

      {/* Product Row */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] items-center gap-4 p-4 border-b border-gray-300 dark:border-gray-700 ">

        {/* Product Info */}
        <div className="flex items-center gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
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
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.count}</span>
          <button
            className="text-lg font-bold px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            onClick={() => onDecrease(item.id)}
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
          className="p-2 rounded-full bg-red-500/10 dark:bg-red-600/10 text-red-500 dark:text-red-400 hover:bg-red-500/20 hover:text-red-600 dark:hover:bg-red-600/20 dark:hover:text-red-500 transition flex items-center justify-center"
          onClick={() => onRemove(item.id)}
        >
          <RxCross2 size={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItemComponent;
