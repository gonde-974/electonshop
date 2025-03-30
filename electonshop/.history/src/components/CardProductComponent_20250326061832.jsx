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
        <main className="container mx-auto p-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 animate-fadeIn">
                Нашите Производи
            </h2>

            {allProduct.length === 0 ? (
                <p className="text-center text-gray-500 text-xl mt-10">Нема достапни производи.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-8 md:grid md:grid-cols-3 lg:grid-cols-4">
                    {allProduct.map((product, index) => (
                        <div key={product.id || index} 
                            className="bg-white rounded-xl shadow-md p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn">
                            <CardProductComponent product={product} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default Homepage;
