import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

function CardProductComponent({ product }) {
  return (
      <div className="relative group">
          <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-lg"
          />
          {/* Постојан overlay кој исчезнува при hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
              <span className="pointer-events-none">{product.name}</span>
          </div>
          <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              {/* Функционално копче */}
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Додај во кошничка
              </button>
          </div>
      </div>
  );
}

export default CardProductComponent;
