import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleProductPage() {
  const { productId } = useParams(); // Го земаме productId од URL-то
  const [product, setProduct] = useState(null);

  console.log("Product ID:", productId); 
  console.log(product);
  

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      
      
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <p className="text-center text-gray-500 text-xl mt-10">Loading product...</p>;
  }

  return (
    <Card className="w-full md:w-[600px] bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
    {/* Лева страна - Слика */}
    <div className="w-full md:w-1/2 bg-lightBlueColor flex items-center justify-center p-4">
      <img src={product.thumbnail} alt={product.title} className="max-w-full h-auto rounded-lg" />
    </div>

    {/* Десна страна - Детали за производот */}
    <CardContent className="w-full md:w-1/2 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-blackTextColor">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="text-sm mt-2 font-medium text-mainRed">{product.availabilityStatus}</p>
        
        {/* Оценка */}
        <div className="flex items-center mt-2">
          <FaStar className="text-mainYellow" />
          <span className="ml-1 text-blackTextColor font-medium">{product.rating}</span>
        </div>
      </div>

      {/* Долниот дел - Цена и копче за купување */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-lg font-bold text-mainBlue">${product.price}</p>
        <Button className="bg-mainYellow text-whiteTextColor px-4 py-2 flex items-center gap-2 hover:bg-yellow-600">
          <FaShoppingCart /> Додади во кошничка
        </Button>
      </div>
    </CardContent>
  </Card>
  );
}

export default SingleProductPage;
