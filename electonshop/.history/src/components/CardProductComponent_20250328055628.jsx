import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

function CardProductComponent({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-80">
        {/* Слика */}
        <div className='relative w-full'>
        <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-48 object-cover rounded-lg"
        />
        <div className='absolute inset-0 bg-mainBlue bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold rounded-lg'/>
        </div>

        {/* Наслов */}
        <h2 className="text-lg font-extrabold text-mainBlue mt-4">{product.title}</h2>

        {/* Цена */}
        <div className="flex items-center gap-1 mt-2">
    <p className="text-lg font-bold text-gray-700">$</p>
    <span className="text-xl font-semibold text-red-500">{product.price}</span>
</div>


        {/* Рейтинг */}
        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly className="mt-2" />

        {/* Линк */}
        <Link to={`/singleProductPage/${product.id}`} 
              className="block text-center bg-mainBlue text-white py-2 mt-4 rounded-lg transition-all duration-300 hover:bg-mainYellow hover:scale-105">
            View Detail
        </Link>
    </div>
  );
}

export default CardProductComponent;
