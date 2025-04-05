import React from 'react';
import { RxCross2 } from 'react-icons/rx';

function CartItemComponent({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        </div>

        <div className="text-center">${item.price.toFixed(2)}</div>

        <div className="flex items-center justify-center gap-2">
          <button onClick={() => onIncrease(item.id)} className="px-2 py-1 bg-gray-200 rounded">
            +
          </button>
          <span>{item.count}</span>
          <button onClick={() => onDecrease(item.id)} className="px-2 py-1 bg-gray-200 rounded">
            -
          </button>
        </div>

        <div className="text-center font-medium">${item.cartTotal.toFixed(2)}</div>

        <button onClick={() => onRemove(item.id)} className="text-red-500">
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default CartItemComponent;
