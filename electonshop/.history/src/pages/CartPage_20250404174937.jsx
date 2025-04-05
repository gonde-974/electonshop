import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
  const{cart} = useSelector(state=>state.cartStore);
  console.log(cart)
  return (
    <div>
      {cart.length > 0 ? (
        <div className='mt-[20px] lg:mt[50px] '>
            <div className='container mx-auto'>
              {/* left side */}
              <div>
                <div className='grid grid-cols-4 bg-lightBlue'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>SubTitle</p>
                </div>
              </div>
            </div>
        </div>
      ):(
      <div>nema proizvodi</div>
      )}
    </div>
  )
}

export default CartPage