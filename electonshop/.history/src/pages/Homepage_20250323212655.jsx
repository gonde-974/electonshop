import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice';

function Homepage() {
    const dispatch = useDispatch();

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
    }, [dispatch]);

    return (
        <div>Homepage</div>
    );
}

export default Homepage;
