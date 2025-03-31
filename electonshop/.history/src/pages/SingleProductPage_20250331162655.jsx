import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Лева страна - Карусел за слики */}
        <div className="w-full md:w-1/2 p-6">
          <Slider {...sliderSettings}>
            {product.images?.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img src={image} alt={product.title} className="max-w-full h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Десна страна - Детали за производот */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-sm font-medium text-red-500 mt-2">{product.availabilityStatus}</p>
            <p className="text-sm text-gray-500 mt-1">Бренд: <span className="text-gray-800 font-semibold">{product.brand}</span></p>
            <p className="text-sm text-gray-500">Категорија: <span className="text-gray-800 font-semibold">{product.category}</span></p>
            <p className="text-sm text-gray-500">Гаранција: <span className="text-gray-800 font-semibold">{product.warrantyInformation}</span></p>
            <p className="text-sm text-gray-500">Политика за враќање: <span className="text-gray-800 font-semibold">{product.returnPolicy}</span></p>
            {/* Оценка */}
            <div className="flex items-center mt-3">
              <FaStar className="text-yellow-500" />
              <span className="ml-2 text-gray-800 font-medium">{product.rating}</span>
            </div>
          </div>

          {/* Цена и копче за купување */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-600">${product.price}</p>
            <button className="bg-yellow-500 text-white px-5 py-2 flex items-center gap-2 hover:bg-yellow-600 rounded-lg transition-all">
              <FaShoppingCart /> Додади во кошничка
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;