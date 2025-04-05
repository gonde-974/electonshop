import React from 'react'

function CartItemComponent({ item }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all">
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

      {/* product price */}
      <div>
        <p>{item.price}</p>
      </div>

      {/* quantity */}
       <div className='flex items--centar'>
            <button>+</button>
            <span>{item.count}</span>
            <button>-</button>
       </div>

       {/* subtotal */}
       <div className="text-lg font-semibold text-gray-800">
          {item.cartTotal}
          </div>
    </div>
  )
}

export default CartItemComponent
