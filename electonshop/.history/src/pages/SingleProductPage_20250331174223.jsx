import React, { useState } from "react";

function SingleProductCardComponent({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counter , setCounter] = useState(1)

  // Функција за поставување на тековната слика
  const handleCurrentImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
   <div className="bg-white rounded-2xl shadow-lg flex overflow-hidden max-w-4xl mx-auto p-6">
      {/* Лева страна - Главна слика и мали слики */}
      <div className="flex flex-col items-center w-1/2">
        {/* Главна слика */}
        <img
          src={product.images[currentImageIndex]}
          alt="Главна слика"
          className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105"
        />
        {/* Мали слики */}
        <div className="flex gap-2">
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

      {/* Десна страна - Содржина */}
      <div className="flex flex-col justify-between w-1/2 pl-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h2>
          <p className="text-lg text-gray-600 mb-2">Цена: ${product.price}</p>
          <p className="text-sm text-gray-500 mb-2">Категорија: {product.category}</p>
          <p className="text-sm text-gray-500 mb-2">Попуст: {product.discountPercentage}%</p>
          <p className="text-sm text-gray-500 mb-2">Оценка: {product.rating} ⭐</p>
          <p className="text-sm text-gray-500 mb-2">Залиха: {product.stock} парчиња</p>
          <p className="text-sm text-gray-500 mb-2">Тагови: {product.tags?.join(", ")}</p>
          <p className="text-sm text-gray-500 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500">Бренд: {product.brand}</p>
          <button>+</button>{counter}<button>-</button>
          <p>ddddddddddd</p>
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Додади во кошничка
        </button>
      </div>
    </div> 
  );
}

export default SingleProductCardComponent;
