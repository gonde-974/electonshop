import React from 'react'
import { RxCross2 } from "react-icons/rx";

function CartItemComponent({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className='grid grid-cols-4 bg-lightBlueColor h-[60px] place-items-center'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>SubTitle</p>
                </div>
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-300 dark:border-gray-700 transition-all hover:scale-[1.02]">
      
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
      />

      {/* Product Details */}
      <div className="text-center md:text-left space-y-1">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          На залиха: <span className="font-bold text-green-600 dark:text-green-400">{item.stock}</span>
        </p>
      </div>

      {/* Product Price */}
      <div className="text-lg font-semibold text-gray-800 dark:text-white">
        ${item.price.toFixed(2)}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl shadow-md">
        <button
          className="text-lg font-bold px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>
        <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.count}</span>
        <button
          className="text-lg font-bold px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={() => onDecrease(item.id)}
        >
          -
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        ${(item.price * item.count).toFixed(2)}
      </div>

      {/* Remove Button */}
      <button
        className="p-3 rounded-full bg-red-500/10 dark:bg-red-600/10 text-red-500 dark:text-red-400 hover:bg-red-500/20 hover:text-red-600 dark:hover:bg-red-600/20 dark:hover:text-red-500 transition"
        onClick={() => onRemove(item.id)}
      >
        <RxCross2 size={22} />
      </button>
    </div>
  )
}

export default CartItemComponent;
