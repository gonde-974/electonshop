import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
  const{cart} = useSelector(state=>state.cartStore);
  console.log(cart)
  return (
    <div>
      {cart.length > 0 ? (<div className='mt-[20px] lg:mt[50px] '>

        </div>):(<div>nema proizvodi</div>)}
    </div>
  )
}

export default CartPage