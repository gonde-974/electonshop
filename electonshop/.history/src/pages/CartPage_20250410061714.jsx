import React from 'react'
import { useSelector } from 'react-redux'
import CartItemComponent from '../components/CartItemComponent';

function CartPage() {
  const { cart, totalPrice } = useSelector(state => state.cartStore);

  return (
    <div className='px-4 py-8'>
      {cart.length > 0 ? (
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-6'>

            {/* Left side - Cart items */}
            <div className='w-full lg:w-2/3'>
              {/* Header */}
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] bg-blue-100 text-gray-700 font-semibold text-center py-4 rounded-t-xl shadow-sm">
                <p>Продукт</p>
                <p>Цена</p>
                <p>Количина</p>
                <p>Вкупно</p>
                <p></p>
              </div>

              {/* Items */}
              <div className='bg-white rounded-b-xl shadow-md'>
                {cart.map((item, index) => (
                  <CartItemComponent key={index} item={item} />
                ))}
              </div>
            </div>

            {/* Right side - Order summary */}
            <div className='w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-lg h-fit'>
              <div className='bg-lightBlueColor'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 '>Преглед на нарачка</h3>
              </div>
              <div className='flex justify-between text-lg font-medium mb-6'>
                <span>Вкупна сума:</span>
                <span className='text-blue-600 font-bold'>{totalPrice} ден.</span>
              </div>

              {/* Coupon input */}
              <div className='flex items-center gap-2 mb-6'>
                <input
                  type="text"
                  placeholder='Внеси купон'
                  className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
                <button className='px-4 py-2 bg-mainBlue text-white rounded-md hover:bg-blue-600 transition'>Примени</button>
              </div>

              {/* Country selector - optional future feature */}
              <div className='mb-6'>
                <label htmlFor="country" className='block mb-2 text-sm font-medium text-gray-600'>Избери земја</label>
                <select
                  id="country"
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                >
                  <option value="">-- Одбери --</option>
                  <option value="mk">Македонија</option>
                  <option value="rs">Србија</option>
                  <option value="bg">Бугарија</option>
                </select>
              </div>

              {/* Checkout button */}
              <button className='w-full bg-mainYellow text-white font-semibold py-3 rounded-md hover:bg-green-600 transition'>
                Направи нарачка
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center text-gray-500 text-xl'>Немате додадено производи во кошничка.</div>
      )}
    </div>
  )
}

export default CartPage;
