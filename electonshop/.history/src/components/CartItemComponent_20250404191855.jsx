import React from 'react'

function CartItemComponent({item}) {
  return (
    <div className='grid grid-cols-4 place-items-center'>
        <div className='flex gap-[10px]'>
            {/* img */}
            <img src={item.thumbnail} alt={item.title} className='w-[100px] h-[100px] object-contain'  />

            {/* property of product */}
            <div>
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <p>{item.stock}</p>
            </div>
        </div>
    </div>
  )
}

export default CartItemComponent