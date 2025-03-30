import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

function CardProductComponent({product}) {
  return (
    <div>
        {/* <img src={product.thumbnail} alt={product.title} /> */}

        <h2>{product.title}</h2>
        <span>${product.price}</span>

        {/* reting */}
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        
        <Link to={`/singleProductPage/${product.id}`}>View Detail</Link>
    </div>
  )
}

export default CardProductComponent