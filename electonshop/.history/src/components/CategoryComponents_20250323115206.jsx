import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu, X } from "lucide-react";
import ProductsService from "../services/productService";

function CategoryComponents() {
    const [category, setCategory] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        ProductsService.getAllCategory()
            .then((res) => {
                if (Array.isArray(res)) {
                    setCategory([{ id: "all", name: "All Category" }, ...res]);
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
    }, []);

    return (
        <div className="relative p-4 flex flex-col items-center">
            {/* ГЛАВНО КОПЧЕ */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center px-4 py-2 bg-mainBlue text-whiteTextColor rounded-lg shadow-md transition-all duration-300 hover:bg-mainYellow"
            >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <span className="ml-2">Категории</span>
            </button>

            {/* DROP-DOWN МЕНИ */}
            {menuOpen && (
                <div className="absolute mx-auto mt-2 w-full max-w-5xl bg-white border border-gray-300 rounded-lg shadow-lg p-3 animate-slideDown flex justify-center">
                    
                    {/* 🖼️ 4-колонска структура за мали екрани */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:hidden w-full text-center">
                        {category.map((cat, index) => (
                            <div 
                                key={index} 
                                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow-md 
                                transition-all duration-300 hover:bg-gradient-to-r hover:from-mainYellow hover:to-mainBlue 
                                hover:text-white hover:shadow-xl hover:scale-105"
                            >
                                <Link 
                                    to={`/category/${cat.id}`} 
                                    className="block font-medium text-center w-full"
                                >
                                    {cat.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* ➡️ Хоризонтален приказ на големи екрани */}
                    <div className="hidden lg:flex overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full justify-center">
                        <ul className="flex gap-2 px-2 py-2">
                            {category.map((cat, index) => (
                                <li 
                                    key={index} 
                                    className="flex items-center justify-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md transition-all duration-300 
                                    hover:bg-gradient-to-r hover:from-mainYellow hover:to-mainBlue hover:text-white 
                                    hover:shadow-xl hover:scale-105"
                                >
                                    <Link 
                                        to={`/category/${cat.id}`} 
                                        className="block font-medium text-center w-full whitespace-nowrap"
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* TOAST КОНТЕЈНЕР */}
            <ToastContainer />
        </div>
    );
}

export default CategoryComponents;
