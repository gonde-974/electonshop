import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice'; // Проверете ја точната патека до productSlice

function Homepage() {
    const dispatch = useDispatch();

    useEffect(() => {
        ProductsService.getAllProducts()
            .then(res => {
                dispatch(saveAllProductAction(res)); // Зачувување на податоците во Redux состојбата
            })
            .catch(err => console.log(err));
    }, [dispatch]);

    return (
        <div>Homepage</div>
    );
}

export default Homepage;
