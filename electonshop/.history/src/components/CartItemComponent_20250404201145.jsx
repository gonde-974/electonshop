import React from 'react'
import { RxCross2 } from "react-icons/rx";

function CartItemComponent({ item }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all">
      
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md border"
      />

      {/* Product Details */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-sm font-medium text-gray-700">
          На залиха: <span className="font-bold text-green-600">{item.stock}</span>
        </p>
      </div>

      {/* Product Price */}
      <div className="text-lg font-semibold text-gray-800">
        ${item.price.toFixed(2)}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">+</button>
        <span className="text-lg font-semibold">{item.count}</span>
        <button className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">-</button>
      </div>

      {/* Subtotal */}
      <div className="text-lg font-semibold text-gray-800">
        ${item.cartTotal.toFixed(2)}
      </div>

      {/* Remove Button */}
      <button className="text-red-500 hover:text-red-700 transition">
        <RxCross2 size={22} />
      </button>
    </div>
  )
}

export default CartItemComponent;
