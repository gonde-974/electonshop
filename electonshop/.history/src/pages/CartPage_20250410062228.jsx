{/* Right side - Order summary */}
<div className='w-full lg:w-2/5'>
  <div className='bg-lightBlueColor p-6 rounded-xl shadow-xl h-fit border border-gray-100'>
    <h3 className='text-2xl font-semibold text-gray-800 mb-6 border-b pb-2'>Преглед на нарачка</h3>

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
      <button className='px-4 py-2 bg-mainBlue text-white rounded-md hover:bg-blue-600 transition'>
        Примени
      </button>
    </div>

    {/* Country selector */}
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
