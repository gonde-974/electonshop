import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingComponent from '../components/LoadingComponent';
import {  NavLink } from "react-router-dom";

// Icons
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { saveAllProductAction } from '../store/productSlice';

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  //Dispatch
  const dispatch = useDispatch();

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

  function handleProductInToCart(){
    dispatch(saveInCartAction(product))
  }
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl border-4 border-gray-200  transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative w-full max-h-96 overflow-hidden rounded-xl shadow-md border-2 border-gray-300 hover:border-blue-400 transition-all flex items-center justify-center">
            <img
              src={product.images[currentImageIndex]}
              alt="Главна слика"
              className="w-full h-auto max-h-96 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex mt-4 gap-2 justify-center">
            {product.images.map((el, index) => (
              <img
                src={el}
                key={index}
                alt=""
                onClick={() => handleCurrentImage(index)}
                className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 ${index === currentImageIndex ? 'border-blue-500 shadow-md' : 'border-gray-300 opacity-75 hover:opacity-100 hover:border-blue-400'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 space-y-4 border-l-4 border-gray-200 pl-6">
          <h2 className="text-3xl font-semibold text-gray-900">{product.title}</h2>
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          <p className="text-gray-600">Category: <span className="font-medium text-blue-500">{product.category}</span></p>
          <p className="text-gray-600">Discount: <span className="text-red-500">{product.discountPercentage}%</span></p>
          <p className="flex items-center text-gray-700">
            Rating: {product.rating} <FaStar className="text-yellow-500 ml-1" />
          </p>
          <p className={`text-sm font-medium ${product.stock <= 5 ? 'text-red-500' : 'text-green-500'}`}>Stock: {product.stock} pieces</p>
          <p className="text-gray-600 font-medium">Brand: {product.brand}</p>
          <hr className="my-4 border-gray-300" />

          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <button
              onClick={() => setCounter(prev => Math.max(1, prev - 1))}
              className="bg-gray-200 px-3 py-2 rounded-md border-2 border-gray-300 hover:bg-gray-300 hover:border-blue-400 transition"
            >
              -
            </button>
            <span className="text-lg font-bold">{counter}</span>
            <button
              onClick={() => setCounter(prev => prev + 1)}
              className="bg-gray-200 px-3 py-2 rounded-md border-2 border-gray-300 hover:bg-gray-300 hover:border-blue-400 transition"
            >
              +
            </button>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Total price: <span className="text-blue-600">${(product.price * counter).toFixed(2)}</span>
          </p>
          <div className="flex items-center gap-4 flex-wrap">
  {/* Копче за додaвање во кошничка */}
  <NavLink 
    to="/cart" 
    className="w-[200px] bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 rounded-full shadow-lg border-2 border-yellow-500 
               hover:from-yellow-500 hover:to-yellow-600 hover:border-yellow-600 transition-all duration-300 ease-in-out 
               flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
    onClick={handleProductInToCart}           
  >
    <FaShoppingCart className="text-2xl" /> 
    <span className="text-lg font-semibold">Add to Cart</span>
  </NavLink>

  {/* Копче за додавање во омилени */}
  <NavLink 
    to="/favorite" 
    className="p-3 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-100 
               transition-all duration-300 ease-in-out flex items-center justify-center 
               shadow-md transform hover:scale-110"
  >
    <CiHeart className="text-3xl text-gray-600 hover:text-red-500 transition-all duration-300" />
  </NavLink>
</div>

        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
