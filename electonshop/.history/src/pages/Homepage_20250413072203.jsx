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
            <div className="flex gap-3 items-center">
      {/* GRID ICON */}
      <button
        onClick={() => setViewMode('grid')}
        className={`p-3 rounded-xl border transition-all duration-200
          ${viewMode === 'grid' ? 'bg-mainYellow text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
        title="Grid View"
      >
        <FaThLarge className="text-xl" />
      </button>

      {/* LIST ICON */}
      <button
        onClick={() => setViewMode('list')}
        className={`p-3 rounded-xl border transition-all duration-200
          ${viewMode === 'list' ? 'bg-mainYellow text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
        title="List View"
      >
        <FaList className="text-xl" />
      </button>
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
