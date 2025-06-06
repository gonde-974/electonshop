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
            <div className='flex justify-content-end mt-[20px] mr-[20px] gap-[20px]'>
                <GoListUnordered />
                <HiViewGridAdd />
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
