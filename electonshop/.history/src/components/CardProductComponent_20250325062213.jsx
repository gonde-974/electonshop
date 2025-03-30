import React from 'react'

function CardProductComponent({product}) {
  return (
    <div>
        <img src={product.thumbnail} alt={product.title} />

        <h2>{product.title}</h2>
        <span>${product.price}</span>
        
        <LInk to={`/singleProductPage ${product.Id}`}>View Detail</LInk>
    </div>
  )
}

export default CardProductComponent