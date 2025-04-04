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
      <div className="flex justify-center items-start h-screen pt-10">
        <p className="text-gray-500 text-xl"><LoadingComponent/></p>
      </div>
    );
  }

  const handleCurrentImage = (index) => setCurrentImageIndex(index);

  return (
    <div className="single-product-container">
      {/* Лева страна - Слики */}
      <div className="image-container">
        <div className="relative w-full h-80">
          <img
            src={product.images[currentImageIndex]}
            alt="Главна слика"
            className="main-image"
          />
        </div>
        <div className="thumbnail-container">
          {product.images.map((el, index) => (
            <img
              src={el}
              key={index}
              alt="Мала слика"
              onClick={() => handleCurrentImage(index)}
              className={`thumbnail-image ${index === currentImageIndex ? 'thumbnail-selected' : 'thumbnail-default'}`}
            />
          ))}
        </div>
      </div>

      {/* Десна страна - Детали за производот */}
      <div className="product-details">
        <div>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-info">Категорија: {product.category}</p>
          <p className="product-info">Попуст: {product.discountPercentage}%</p>
          <p className="product-rating">Оценка: {product.rating} <FaStar className="text-yellow-500 ml-1" /></p>
          <p className={`product-stock ${product.stock <= 5 ? 'stock-low' : 'stock-normal'}`}>
            Залиха: <span className="font-bold">{product.stock}</span> парчиња
          </p>
          <p className="product-info">{product.description}</p>
          <p className="product-info">Бренд: {product.brand}</p>
        </div>

        {/* Бројач за количина */}
        <div className="quantity-container">
          <span className="quantity-text">Количина:</span>
          <button 
            onClick={() => setCounter(prev => Math.max(1, prev - 1))} 
            className="quantity-btn"
          >
            -
          </button>
          <span className="quantity-value">{counter}</span>
          <button 
            onClick={() => setCounter(prev => prev + 1)} 
            className="quantity-btn"
          >
            +
          </button>
          <span>Вкупно :{product.totalprice}</span>
        </div>
        

        {/* Копче за купување */}
        <button className="add-to-cart-btn">
          <FaShoppingCart /> Додади во кошничка
        </button>
      </div>
    </div>
  );
}

export default SingleProductPage;
