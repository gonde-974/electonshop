import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItemComponent from '../components/CartItemComponent';
import CountrySelector from '../components/CountrySelector';

function CartPage() {
  const { cart, totalPrice } = useSelector(state => state.cartStore);

  const [curentCoupon, setCurentCoupon] = useState('');
  const coupon = useRef();

  function handleCoupon() {
    setCurentCoupon(coupon.current.value);
    coupon.current.value = '';
  }

  return (
    <div className='px-4 py-8'>
      {cart.length > 0 ? (
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-8'>

            {/* Лева страна - Артикли */}
            <div className='w-full lg:w-3/5'>
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] bg-blue-100 text-gray-700 font-semibold text-center py-4 rounded-t-xl shadow-sm">
                <p>Продукт</p>
                <p>Цена</p>
                <p>Количина</p>
                <p>Вкупно</p>
                <p></p>
              </div>

              <div className='bg-white rounded-b-xl shadow-md'>
                {cart.map((item, index) => (
                  <CartItemComponent key={index} item={item} />
                ))}
              </div>
            </div>

            {/* Десна страна - Преглед */}
            <div className='w-full lg:w-2/5 bg-lightBlueColor p-6 rounded-xl shadow-xl h-fit border border-gray-100'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-6 border-b pb-2'>Преглед на нарачка</h3>

              <div className='flex justify-between text-lg font-medium mb-6'>
                <span>Вкупна сума:</span>
                <span className='text-blue-600 font-bold'>
                  ${curentCoupon === 'gonde' ? (totalPrice / 2).toFixed(2) : totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Купон */}
              <div className='flex items-center gap-2 mb-6'>
                <label className='font-[14px]'>Insert Cupon for 50%</label>
                <input
                  type="text"
                  placeholder='Внеси купон'
                  className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                  ref={coupon}
                />
                <button
                  className='px-4 py-2 bg-mainYellow text-white rounded-md hover:bg-mainBlue transition'
                  onClick={handleCoupon}
                >
                  Примени
                </button>
              </div>

              {/* Селекција на земја */}
              <CountrySelector />

              {/* Копчиња */}
              <button className='w-full bg-mainYellow text-white font-semibold py-3 rounded-md hover:bg-mainBlue transition'>
                Направи нарачка
              </button>
              <button className='w-full bg-mainBlue my-[20px] text-white font-semibold py-3 rounded-md hover:bg-mainYellow transition'>
                Одјависе
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center text-gray-500 text-xl mt-20'>
          Кошничката е празна 🛒
        </div>
      )}
    </div>
  );
}

export default CartPage;
