import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import LoadingComponent from '../components/LoadingComponent';

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
    return (
      <div className="flex justify-center items-start h-screen pt-20">
        <LoadingComponent />
      </div>
    );
  }

  const handleCurrentImage = (index) => setCurrentImageIndex(index);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {/* Лева страна - Слики */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md">
            <img
              src={product.images[currentImageIndex]}
              alt="Главна слика"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex mt-4 gap-2 justify-center">
            {product.images.map((el, index) => (
              <img
                src={el}
                key={index}
                alt=""
                onClick={() => handleCurrentImage(index)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex ? 'ring-4 ring-blue-500' : 'opacity-75 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Десна страна - Детали за производот */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900">{product.title}</h2>
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          <p className="text-gray-600">Category: <span className="font-medium text-blue-500">{product.category}</span></p>
          <p className="text-gray-600">Discount: <span className="text-red-500">{product.discountPercentage}%</span></p>
          <p className="flex items-center text-gray-700">
            Rating: {product.rating} <FaStar className="text-yellow-500 ml-1" />
          </p>
          <p className={`text-sm font-medium ${product.stock <= 5 ? 'text-red-500' : 'text-green-500'}`}>
            Stock: {product.stock} pises
          </p>
          <p className="text-gray-600 font-medium">Brand: {product.brand}</p>

          <hr className="my-4 border-gray-300" />

          {/* Бројач за количина */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <button 
              onClick={() => setCounter(prev => Math.max(1, prev - 1))}
              className="bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="text-lg font-bold">{counter}</span>
            <button 
              onClick={() => setCounter(prev => prev + 1)}
              className="bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Total price: <span className="text-blue-600">${(product.price * counter).toFixed(2)}</span>
          </p>

          {/* Копче за купување */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            <FaShoppingCart /> Додади во кошничка
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
