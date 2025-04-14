import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsService from '../services/productService';
import { saveAllProductAction } from '../store/productSlice';
import CardProductComponent from '../components/CardProductComponent';
import LoadingComponent from '../components/LoadingComponent';

// Icons
import { GoListUnordered } from "react-icons/go";
import { HiViewGridAdd } from "react-icons/hi";
import { FaList } from "react-icons/fa6";

function Homepage() {
    const [activeView, setActiveView] = useState('GridView');
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
        <main className="homepage-container px-4 py-6">
            {/* Икони за поглед */}
            <div className="flex justify-end mb-6">
                <div className="flex gap-2 bg-white rounded-xl shadow-sm p-2 border border-gray-100">

                    <button
                        onClick={() => setActiveView('GridView')}
                        className={`p-2 md:p-3 rounded-md transition-colors duration-200
                            ${activeView === 'GridView'
                                ? 'bg-blue-100 text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:bg-gray-100 hover:text-blue-600'}
                        `}
                        aria-label="Grid View"
                    >
                        <HiViewGridAdd className="text-lg md:text-xl" />
                    </button>

                    <button
                        onClick={() => setActiveView('ListView')}
                        className={`p-2 md:p-3 rounded-md transition-colors duration-200
                            ${activeView === 'ListView'
                                ? 'bg-blue-100 text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:bg-gray-100 hover:text-blue-600'}
                        `}
                        aria-label="List View"
                    >
                        <FaList className="text-lg md:text-xl" />
                    </button>

                </div>
            </div>

            {/* Прикажување на производи */}
            {allProduct.length === 0 ? (
                <div className="flex justify-center items-start h-screen pt-10">
                    <LoadingComponent />
                </div>
            ) : (
                <div className={activeView === 'GridView' ? 'product-grid' : 'product-list'}>
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
