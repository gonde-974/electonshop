import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice';
import produdtSlice from '../store/productSlice'
import CartComponent from '../components/CartComponent';

function Homepage() {
    const dispatch = useDispatch();
    const {allProduct} = useSelector(state=>state.productStore)

    

    useEffect(() => {
        ProductsService.getAllProducts()
            .then(res => {          
              
                if (res && res.products) {
                    dispatch(saveAllProductAction(res.products));
                } else {
                    console.error('Unexpected response structure:', res);
                }
            })
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (   
      <main className='container mx-auto'>
        <div>
          {allProduct.map((product,index)=>{
            return <CartComponent key={product.id || index}
                                  product={product}
                   />
          })}
        </div>
      </main>
    );
}

export default Homepage;
