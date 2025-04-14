import React from 'react'
import { useSelector } from 'react-redux'
import CartItemComponent from '../components/CartItemComponent';

function CartPage() {
  const{cart,totalPrice} = useSelector(state=>state.cartStore);
    return (
    <div className='px-[15px]'>
      {cart.length > 0 ? (
        <div className='mt-[20px] lg:mt[50px]'>
            <div className='container mx-auto flex flex-col lg:flex-row'>
              {/* left side */}
              <div className='w-full lg:70%'>
                 {/* Header */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] bg-lightBlueColor text-blackColr-text font-semibold text-center py-3 ">
        <p>Продукт</p>
        <p>Цена</p>
        <p>Количина</p>
        <p>Вкупно</p>
        
      </div>

                {/* body Content */}
                <div>
                  {cart.map((item,index)=>{
                    return<CartItemComponent key={index} item={item}/>
                  })}
                </div>
              </div>
              {/* right side */}
              <div>
                <h3>Total price</h3>
                <span>{totalPrice}</span>

                {/* cupons */}
                <div>
                  <input type="text" placeholder='Insert Cupon' />
                  <button>Applay</button>
                </div>
                {/* TODO Country selector/option */}

                <button>Checkout</button>  
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