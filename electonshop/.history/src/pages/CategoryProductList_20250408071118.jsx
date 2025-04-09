// src/pages/CategoryProductList.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productService";
import CardProductComponent from "../components/CardProductComponent";

function CategoryProductList() {
    const { id } = useParams(); // category ID од URL
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductsService.getAllProducts()
            .then((res) => {             
                
                if (res && res.products) {
                    const filtered = id === "all"
                        ? res.products
                        : res.products.filter(p => p.category_id === parseInt(id));
                    setProducts(filtered);
                }
            })
            .catch(err => console.error("Грешка при вчитување производи:", err));
    }, [id]);

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.length > 0 ? (
                products.map(product => (                 
                    
                    <CardProductComponent key={product.id} product={product} />
                ))
            ) : (
                <p className="text-center text-lg">Нема производи за оваа категорија.</p>
            )}
        </div>
    );
}

export default CategoryProductList;
