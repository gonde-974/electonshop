import React from 'react'

function CartComponent({product}) {
  return (
    <div>
        <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default CartComponent