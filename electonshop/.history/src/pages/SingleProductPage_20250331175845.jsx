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

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto p-6 border border-gray-200">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <img
          src={product.images[currentImageIndex]}
          alt="Главна слика"
          className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
        />
        <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide">
          {product.images.map((el, index) => (
            <img
              src={el}
              key={index}
              alt="Мала слика"
              onClick={() => setCurrentImageIndex(index)}
              className={`w-20 h-20 object-cover rounded-xl shadow-md cursor-pointer transition-all duration-300 border-2 ${
                index === currentImageIndex ? "border-mainBlue scale-110" : "border-gray-300 opacity-80 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between w-full md:w-1/2 p-6">
        <div>
          <h2 className="text-3xl font-bold text-blackTextColor mb-3">{product.title}</h2>
          <p className="text-2xl font-semibold text-mainRed">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">Категорија: {product.category}</p>
          <p className="text-sm text-gray-500">Попуст: {product.discountPercentage}%</p>
          <p className="flex items-center text-sm text-gray-500 mt-1">Оценка: {product.rating} <FaStar className="text-mainYellow ml-1" /></p>
          <p className="text-sm text-gray-500">Залиха: {product.stock} парчиња</p>
          <p className="text-sm text-gray-600 mt-3">{product.description}</p>
        </div>

        <div className="flex items-center mt-6">
          <button onClick={() => setCounter(prev => Math.max(1, prev - 1))} className="bg-lightBlueColor text-mainBlue px-4 py-2 rounded-lg">-</button>
          <span className="mx-4 text-xl font-bold">{counter}</span>
          <button onClick={() => setCounter(prev => prev + 1)} className="bg-lightGreenColor text-white px-4 py-2 rounded-lg">+</button>
        </div>

        <button className="mt-6 bg-mainBlue text-white px-6 py-3 rounded-xl shadow-lg hover:bg-mainYellow transition flex items-center justify-center gap-2 text-lg font-semibold">
          <FaShoppingCart /> Додади во кошничка
        </button>
      </div>
    </div>
  );
}

export default SingleProductPage;
