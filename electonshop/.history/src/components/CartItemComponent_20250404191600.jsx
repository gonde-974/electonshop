import React from 'react'

function CartItemComponent({item}) {
  return (
    <div className='grid grid-cols-4 place-items-center'>
        <div>
            {/* img */}
            <img src={item.thumbnail} alt={item.title} className='w-[100px] h-[100px] object-contain'  />

            {/* property of product */}
        </div>
    </div>
  )
}

export default CartItemComponent