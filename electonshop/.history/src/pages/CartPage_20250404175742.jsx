import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
  const{cart} = useSelector(state=>state.cartStore);
  console.log(cart)
  return (
    <div>
      {cart.length > 0 ? (
        <div className='mt-[20px] lg:mt[50px]'>
            <div className='container mx-auto flex flex-col lg:flex-row'>
              {/* left side */}
              <div>
                <div className='grid grid-cols-4 bg-lightBlueColor h-[60px] place-items-center'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>SubTitle</p>
                </div>
              </div>

              {/* right side */}
              <div>
                TotalPrice
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