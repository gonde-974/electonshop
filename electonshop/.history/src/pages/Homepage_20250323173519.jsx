import React, { useEffect } from 'react'
import ProductsService from '../services/productService'

function Homepage() {
  useEffect(()=>{
    ProductsService.getAllProducts()
     .then(res=>console.log(res))
     .catch(err=>console.log(err))
     
     
  },[])
  return (
    <div>Homepage</div>
  )
}

export default Homepage