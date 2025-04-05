import React from 'react'

function CartItemComponent({item}) {
  return (
    <div className='grid grid-cols-4 place-items-center'>
        <div>
            <img src={item.thumbnail} alt={item.title}  />
        </div>
    </div>
  )
}

export default CartItemComponent