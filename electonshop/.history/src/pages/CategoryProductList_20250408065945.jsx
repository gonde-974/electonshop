// src/pages/CategoryProductList.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productService";
import CardProductComponent from "../components/CardProductComponent";

function CategoryProductList() {
    const { id } = useParams(); // category ID од URL
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductsService.getProductsByCategory(categoryId)
            .then(res => {
                const productList = Array.isArray(res) ? res : res.products;
    
                if (productList && productList.length > 0) {
                    setProducts(productList);
                } else {
                    console.log("Нема производи во оваа категорија");
                }
            })
            .catch(err => console.error("Грешка при добивање производи:", err));
    }, [categoryId]);
    

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
