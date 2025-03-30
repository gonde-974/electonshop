import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";
import ProductsService from "../services/productService";
import "../index.css"; 
import CardProductComponent from "../components/CardProductComponent";

function CategoryComponents() {
    const [category, setCategory] = useState([]);
    const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductsService.getAllCategory()
            .then((res) => {
                if (Array.isArray(res)) {
                    setCategory([{ id: "all", name: "Сите категории" }, ...res]);
                } else {
                    console.error("Податоците не се во очекуван формат:", res);
                }
            })
            .catch((err) => {
                console.error("Грешка при добивање на категории:", err);
                toast.error("Грешка при вчитување на категориите!", {
                    position: "top-right",
                    autoClose: 3000,
                    style: { background: "#C33131", color: "#FFFFFF" },
                });
            });

        // Вчитување на производите
        ProductsService.getAllProducts()
            .then((res) => {
                if (res && res.products) {
                    setProducts(res.products);
                } else {
                    console.error("Грешка при вчитување на производите:", res);
                }
            })
            .catch((err) => console.error("Грешка при вчитување на производите:", err));

    }, []);
    

    return (
        <div className="relative w-full flex flex-col items-start p-4">
            {/* ГЛАВНО КОПЧЕ */}
            {!menuCategoryOpen && (
                <button 
                    onClick={() => setMenuCategoryOpen(true)} 
                    className="px-4 py-2 bg-gray-100 text-blackColorText font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
                >
                    Категории
                </button>
            )}

            {/* DROP-DOWN МЕНИ */}
            {menuCategoryOpen && (
                <div className="absolute top-0 left-0 w-full bg-white shadow-lg p-4 rounded-lg z-50">
                    {/* КОПЧЕ ЗА ЗАТВОРАЊЕ */}
                    <button 
                        onClick={() => setMenuCategoryOpen(false)} 
                        className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* ЛИСТА СО КАТЕГОРИИ */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {category.map((cat, index) => (
                            <Link 
                                key={index} 
                                to={`/category/${cat.id}`} 
                                className="px-6 py-3 bg-gray-200 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base md:text-lg"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>

                    {/* ЛИСТА СО ПРОИЗВОДИ */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.map((product, index) => (
                            <CardProductComponent key={index} product={product} />
                        ))}
                    </div>
                </div>
            )}

            {/* TOAST КОНТЕЈНЕР */}
            <ToastContainer />
        </div>
    );
}

export default CategoryComponents;
