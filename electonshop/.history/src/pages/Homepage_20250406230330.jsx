// src/pages/Homepage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsService from "../services/productService";
import { saveAllProductAction } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";
import LoadingComponent from "../components/LoadingComponent";

function Homepage() {
  const dispatch = useDispatch();
  const { allProduct, currentCategory } = useSelector((state) => state.productStore);

  useEffect(() => {
    ProductsService.getAllProducts(currentCategory)
      .then((res) => {
        if (res && res.products) {
          dispatch(saveAllProductAction(res.products));
        } else {
          console.error("Грешка при вчитување на производите:", res);
        }
      })
      .catch((err) => console.error("Грешка при вчитување на производите:", err));
  }, [currentCategory]);

  return (
    <main className="homepage-container">
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
