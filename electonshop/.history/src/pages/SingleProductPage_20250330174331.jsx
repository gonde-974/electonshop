import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleProductPage() {
  const { productId } = useParams(); // Го земаме productId од URL-то
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-full max-w-md my-4 rounded-lg shadow-lg"/>
      <p className="text-lg text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold text-red-500 mt-2">${product.price}</p>
    </div>
  );
}

export default SingleProductPage;
