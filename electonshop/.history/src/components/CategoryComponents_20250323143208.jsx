import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";
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
        <div className="relative w-full flex flex-col items-start p-4">
            {/* ГЛАВНО КОПЧЕ (СЕ ПОКАЖУВА КОГА МЕНИТО Е ЗАТВОРЕНО) */}
            {!menuOpen && (
               <button
               onClick={() => setMenuOpen(true)}
               className="px-6 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg 
                          shadow-md border border-gray-300 transition-all duration-300 
                          hover:bg-gray-200 hover:shadow-lg active:bg-gray-300 active:shadow-inner"
           >
               Category
           </button>
           
            )}

            {/* DROP-DOWN МЕНИ СО `X` КОПЧЕ */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-3 animate-slideDown flex flex-col items-start">
                    
                    {/* КОПЧЕ ЗА ЗАТВОРАЊЕ */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="mb-2 px-3 py-1 bg-blackTextColor text-white rounded-full shadow-md transition-all duration-300 hover:bg-red-700"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* ЛИСТА СО КАТЕГОРИИ */}
                    <div className="w-full flex flex-wrap gap-3 text-left bg-gray-50 border border-gray-200 
                rounded-2xl shadow-md p-4 transition-all duration-300 
                hover:shadow-lg hover:border-gray-300 hover:bg-white">
    {category.map((cat, index) => (
        <Link 
            key={index} 
            to={`/category/${cat.id}`} 
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow-md 
            transition-all duration-300 hover:bg-gradient-to-r hover:from-mainYellow hover:to-mainBlue 
            hover:text-white hover:shadow-xl hover:scale-105"
        >
            {cat.name}
        </Link>
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
