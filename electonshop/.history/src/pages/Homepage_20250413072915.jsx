import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice';
import CardProductComponent from '../components/CardProductComponent';
import LoadingComponent from '../components/LoadingComponent';

// Icons
import { GoListUnordered } from "react-icons/go";
import { HiViewGridAdd } from "react-icons/hi";

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
        <main className="homepage-container">
            <div className="flex justify-end mb-4">
                <div className="flex gap-2 bg-white rounded-xl shadow p-2 border border-gray-200">
                    {/* Grid Icon */}
                    <div className="p-2 rounded-lg cursor-pointer hover:bg-mainYellow hover:text-white transition-all duration-200">
                        <FaThLarge className="text-xl" />
                    </div>

                    {/* List Icon */}
                    <div className="p-2 rounded-lg cursor-pointer hover:bg-mainYellow hover:text-white transition-all duration-200">
                        <FaList className="text-xl" />
                    </div>
                </div>
            </div>
            {allProduct.length === 0 ? (
                <div className="flex justify-center items-start h-screen pt-10">
                    <LoadingComponent />
                </div>
            ) : (
                <div className="product-grid">
                    {allProduct.map((product, index) => (
                        <div key={product.id || index} className="product-card">
                            <CardProductComponent product={product} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default Homepage;
