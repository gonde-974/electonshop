import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productService'

function CategoryComponents() {

    
    const {category,setCategory} = useState([])  
    
    useEffect(()=>{
        ProductsService.getAllCategory()
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        
    },[])

    
    

  return (
    <div>CategoryComponents</div>
  )
}

export default CategoryComponents