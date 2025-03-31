import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import ProductsService from '../services/productService';

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    ProductsService.getAllSingleProduct()
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return <p className="text-center text-gray-500 text-xl mt-10">Loading product...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-lightBlueColor p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Лева страна - Слика */}
        <div className="w-full md:w-1/2 bg-lightBlueColor flex items-center justify-center p-6">
          <img src={product.thumbnail} alt={product.title} className="max-w-full h-auto rounded-lg shadow-md" />
          
        </div>

        {/* Десна страна - Детали за производот */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blackTextColor">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-sm font-medium text-mainRed mt-2">{product.availabilityStatus}</p>
            <p className="text-sm text-gray-500 mt-1">Бренд: <span className="text-blackTextColor font-semibold">{product.brand}</span></p>
            <p className="text-sm text-gray-500">Категорија: <span className="text-blackTextColor font-semibold">{product.category}</span></p>
            <p className="text-sm text-gray-500">Гаранција: <span className="text-blackTextColor font-semibold">{product.warrantyInformation}</span></p>
            <p className="text-sm text-gray-500">Политика за враќање: <span className="text-blackTextColor font-semibold">{product.returnPolicy}</span></p>
            
            {/* Оценка */}
            <div className="flex items-center mt-3">
              <FaStar className="text-mainYellow" />
              <span className="ml-2 text-blackTextColor font-medium">{product.rating}</span>
            </div>
          </div>

          {/* Цена и копче за купување */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-bold text-mainBlue">${product.price}</p>
            <button className="bg-mainYellow text-whiteTextColor px-5 py-2 flex items-center gap-2 hover:bg-yellow-600 rounded-lg transition-all">
              <FaShoppingCart /> Додади во кошничка
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;