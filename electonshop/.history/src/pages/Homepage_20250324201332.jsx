import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice';
import produdtSlice from '../store/productSlice'

function Homepage() {
    const dispatch = useDispatch();
    const {allProduct} = useSelector(state=>state.productStore)
    console.log(allProduct);
    

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

       </main>
    );
}

export default Homepage;
