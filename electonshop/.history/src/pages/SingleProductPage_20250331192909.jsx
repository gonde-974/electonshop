import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import ProductsService from '../services/productService';



function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    ProductsService.getAllSingleProduct(`/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return <p className="text-center text-gray-500 text-xl mt-10">Loading product...</p>;
  }

  const handleCurrentImage = (index) => setCurrentImageIndex(index);

  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto p-8 border border-gray-200">
      {/* Лева страна - Слики */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        {/* Главна слика */}
        <div className="relative w-full h-80">
          <img
            src={product.images[currentImageIndex]}
            alt="Главна слика"
            className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        {/* Мали слики */}
        <div className="flex gap-3 mt-4">
          {product.images.map((el, index) => (
            <img
              src={el}
              key={index}
              alt="Мала слика"
              onClick={() => handleCurrentImage(index)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 border-2 
              ${index === currentImageIndex ? `border- mainBlue scale-110` : 'border-gray-300 opacity-75'}`}
            />
          ))}
        </div>
      </div>

      {/* Десна страна - Детали за производот */}
      <div className="flex flex-col justify-between w-full md:w-1/2 pl-6">
        <div>
          <h2 className="text-3xl font-bold text-[${colors.blackTextColor}] mb-4">{product.title}</h2>
          <p className="text-2xl font-semibold text-[${colors.mainRed}] mb-2">${product.price}</p>
          <p className="text-sm text-gray-500 mb-2">Категорија: {product.category}</p>
          <p className="text-sm text-gray-500 mb-2">Попуст: {product.discountPercentage}%</p>
          <p className="text-sm text-gray-500 mb-2 flex items-center">Оценка: {product.rating} <FaStar className="text-yellow-500 ml-1" /></p>
          <p className="text-sm text-gray-500 mb-2">Залиха: {product.stock} парчиња</p>
          <p className="text-sm text-gray-500 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500">Бренд: {product.brand}</p>
        </div>
        
        {/* Бројач за количина */}
        <div className="flex items-center mt-4">
          <button onClick={() => setCounter(prev => Math.max(1, prev - 1))} className="bg-gray-500 text-white px-4 py-2 rounded-lg">-</button>
          <span className="mx-4 text-lg font-bold">{counter}</span>
          <button onClick={() => setCounter(prev => prev + 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg">+</button>
        </div>
        
        {/* Копче за купување */}
        <button className="mt-6 bg-mainBlue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition flex items-center justify-center gap-2">
          <FaShoppingCart /> Додади во кошничка
        </button>
      </div>
    </div>
  );
}

export default SingleProductPage;
