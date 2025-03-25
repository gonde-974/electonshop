import React, { useEffect } from 'react'
import ProductsService from '../services/productService'

function Homepage() {
  // Podatocite ke gi smestime vo redux
  useEffect(()=>{
    ProductsService.getAllProducts()
     .then(res=>console.log(res.data))
     .catch(err=>console.log(err))
     
     
  },[])
  return (
    <div>Homepage</div>
  )
}

export default Homepage