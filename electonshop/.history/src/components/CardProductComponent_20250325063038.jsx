import React from 'react'
import { Link } from 'react-router-dom'

function CardProductComponent({product}) {
  return (
    <div>
        <img src={product.thumbnail} alt={product.title} />

        <h2>{product.title}</h2>
        <span>${product.price}</span>
        
        <Link to={`/singleProductPage/${product.id}`}>View Detail</Link>
    </div>
  )
}

export default CardProductComponent