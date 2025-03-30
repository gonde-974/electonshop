import React from 'react'

function CardProductComponent({product}) {
  return (
    <div>
        <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default CardProductComponent