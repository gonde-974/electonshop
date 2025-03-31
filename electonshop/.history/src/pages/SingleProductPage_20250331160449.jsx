import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <p className="text-center text-gray-500 text-xl mt-10">Loading product...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-lightBlueColor p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Лева страна - Слика */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-lightBlueColor p-4">
          <img src={product.thumbnail} alt={product.title} className="max-w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Десна страна - Детали за производот */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blackTextColor">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-sm mt-2 font-medium text-mainRed">{product.availabilityStatus}</p>
            <p className="text-sm text-gray-500 mt-1">Brand: <span className="font-semibold text-blackTextColor">{product.brand}</span></p>
            <p className="text-sm text-gray-500">Category: <span className="font-semibold text-blackTextColor">{product.category}</span></p>
            <p className="text-sm text-gray-500">SKU: <span className="font-semibold text-blackTextColor">{product.sku}</span></p>
            <p className="text-sm text-gray-500">Stock: <span className="font-semibold text-blackTextColor">{product.stock}</span></p>
            <p className="text-sm text-gray-500">Warranty: <span className="font-semibold text-blackTextColor">{product.warrantyInformation}</span></p>

            {/* Оценка */}
            <div className="flex items-center mt-2">
              <FaStar className="text-mainYellow" />
              <span className="ml-1 text-blackTextColor font-medium">{product.rating}</span>
            </div>
          </div>

          {/* Долниот дел - Цена и копче за купување */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg font-bold text-mainBlue">${product.price} <span className="text-sm text-gray-500 line-through">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span></p>
            <div className="bg-mainYellow text-whiteTextColor px-4 py-2 flex items-center gap-2 hover:bg-yellow-600">
              <FaShoppingCart /> Додади во кошничка
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
