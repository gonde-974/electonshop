import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
  const{cart} = useSelector(state=>state.cartStore);
  console.log(cart)
  return (
    <div>
      {cart > 0 ? 'koga ima proizvodi' : 'koga nema proizvodi'}
    </div>
  )
}

export default CartPage