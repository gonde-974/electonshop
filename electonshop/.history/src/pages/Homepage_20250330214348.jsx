import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice';
import CardProductComponent from '../components/CardProductComponent';

function Homepage() {
    const dispatch = useDispatch();
    const { allProduct } = useSelector(state => state.productStore);

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
        <div className="container mx-auto p-4 ">
            {allProduct.length === 0 ? (
                <p className="text-center text-gray-500 text-xl mt-10">Нема достапни производи.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 ">
                    {allProduct.map((product, index) => (
                        <div key={product.id || index} 
                            className="bg-white rounded-xl shadow-md p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <CardProductComponent product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Homepage;
