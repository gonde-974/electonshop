import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <p className="text-center text-gray-500 text-xl mt-10">Loading product...</p>;
  }

  const handleCurrentImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl mx-auto p-6">
      {/* Лева страна - Главна слика и мали слики */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        {/* Главна слика */}
        <img
          src={product.images[currentImageIndex]}
          alt="Главна слика"
          className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
        />
        {/* Мали слики */}
        <div className="flex gap-2 overflow-x-auto">
          {product.images.map((el, index) => (
            <img
              src={el}
              key={index}
              alt="Мала слика"
              onClick={() => handleCurrentImage(index)}
              className={`w-16 h-16 object-cover rounded-lg shadow cursor-pointer transition-all duration-300 ${
                index === currentImageIndex ? "border-4 border-blue-500 scale-105" : "opacity-70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Десна страна - Детали за производот */}
      <div className="flex flex-col justify-between w-full md:w-1/2 pl-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h2>
          <p className="text-lg text-gray-600 mb-2">Цена: ${product.price}</p>
          <p className="text-sm text-gray-500 mb-2">Категорија: {product.category}</p>
          <p className="text-sm text-gray-500 mb-2">Попуст: {product.discountPercentage}%</p>
          <p className="text-sm text-gray-500 mb-2 flex items-center">Оценка: {product.rating} <FaStar className="text-yellow-500 ml-1" /></p>
          <p className="text-sm text-gray-500 mb-2">Залиха: {product.stock} парчиња</p>
          <p className="text-sm text-gray-500 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500">Бренд: {product.brand}</p>

          {/* Бројач за количина */}
          <div className="flex items-center mt-4">
            <button onClick={() => setCounter(prev => Math.max(1, prev - 1))} className="bg-gray-200 px-3 py-1 rounded-lg">-</button>
            <span className="mx-4 text-lg font-bold">{counter}</span>
            <button onClick={() => setCounter(prev => prev + 1)} className="bg-gray-200 px-3 py-1 rounded-lg">+</button>
          </div>
        </div>
        
        {/* Копче за купување */}
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
          <FaShoppingCart /> Додади во кошничка
        </button>
      </div>
    </div>
  );
}

export default SingleProductPage;
