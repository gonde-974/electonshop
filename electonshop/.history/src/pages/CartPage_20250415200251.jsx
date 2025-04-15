import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItemComponent from '../components/CartItemComponent';
import CountrySelector from '../components/CountrySelector';

function CartPage() {
  const { cart, totalPrice } = useSelector(state => state.cartStore);

  const [currentCoupon, setCurrentCoupon] = useState('');
  const coupon = useRef();

  const isCouponActive = currentCoupon === 'gonde';
  const discountedTotal = isCouponActive ? totalPrice / 2 : totalPrice;

  function handleCoupon() {
    if (isCouponActive) {
      setCurrentCoupon('');
    } else {
      setCurrentCoupon(coupon.current.value);
      coupon.current.value = '';
    }
  }

  return (
    <div className='px-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Left Side - Cart Items */}
          <div className='w-full lg:w-3/5'>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_60px] bg-blue-100 text-gray-700 font-semibold text-center py-4 rounded-t-xl shadow-sm">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p></p>
            </div>

            <div className='bg-white rounded-b-xl shadow-md'>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <CartItemComponent key={index} item={item} />
                ))
              ) : (
                <div className='text-center text-gray-500 py-8 text-lg'>
                  Your cart is empty 🛒
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className='w-full lg:w-2/5 bg-lightBlueColor p-6 rounded-xl shadow-xl h-fit border border-gray-100'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6 border-b pb-2'>Order Summary</h3>

            <div className='flex justify-between text-lg font-medium mb-2'>
              <span>Total Amount:</span>
              <span className='text-gray-800 font-semibold'>${totalPrice.toFixed(2)}</span>
            </div>

            {isCouponActive && (
              <div className='flex justify-between text-md font-medium mb-2 text-green-600'>
                <span>Discount with coupon:</span>
                <span>- ${ (totalPrice / 2).toFixed(2) }</span>
              </div>
            )}

            <div className='flex justify-between text-xl font-bold mb-6'>
              <span>Amount to Pay:</span>
              <span className='text-blue-600'>
                ${discountedTotal.toFixed(2)}
              </span>
            </div>

            {/* Coupon Section */}
            <div className='flex items-center gap-2 mb-6'>
              <label className='font-[14px]'>Insert coupon for 50% off</label>
              <input
                type="text"
                placeholder='Enter coupon'
                className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                ref={coupon}
                disabled={isCouponActive}
              />
              <button
                className={`px-4 py-2
