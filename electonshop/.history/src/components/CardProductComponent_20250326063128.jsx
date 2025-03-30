import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

function CardProductComponent({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-80">
        {/* Слика */}
        <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-48 object-cover rounded-lg"
        />

        {/* Наслов */}
        <h2 className="text-lg font-extrabold text-gray-800 mt-4">{product.title}</h2>

        {/* Цена */}
        <span className="text-xl font-semibold text-red-500 block mt-2">${product.price}</span>

        {/* Рейтинг */}
        <Rating name="half-rating-read" defaultValue={product.raiting} precision={0.5} readOnly className="mt-2" />

        {/* Линк */}
        <Link to={`/singleProductPage/${product.id}`} 
              className="block text-center bg-lightBlueColor text-white py-2 mt-4 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
            View Detail
        </Link>
    </div>
  );
}

export default CardProductComponent;
