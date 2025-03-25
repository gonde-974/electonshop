import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu, X } from "lucide-react";
import ProductsService from "../services/productService";

function CategoryComponents() {
    const [category, setCategory] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false); // Состојба за менито

    useEffect(() => {
        ProductsService.getAllCategory()
            .then((res) => {
                if (Array.isArray(res)) {
                    setCategory(res);
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
        <div className="relative p-4">
            {/* ГЛАВНО КОПЧЕ */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center px-4 py-2 bg-mainBlue text-whiteTextColor rounded-lg shadow-md transition-all duration-300 hover:bg-lightBlueColor"
            >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <span className="ml-2">Категории</span>
            </button>

            {/* DROP-DOWN МЕНИ */}
            {menuOpen && (
      <div className="absolute mt-2 left-0 w-64 bg-gradient-to-r from-white to-gray-100 border border-gray-300 rounded-lg shadow-lg animate-fadeIn">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
          {category.map((cat, index) => (
              <li 
                  key={index} 
                  className="rounded-lg transition-all duration-300 bg-white text-gray-800 text-center shadow-md hover:shadow-lg hover:bg-lightGreenColor hover:text-white hover:scale-105"
              >
                  <Link 
                      to={`/category/${cat.id}`} 
                      className="block px-4 py-3 font-medium"
                  >
                      {cat.name}
                  </Link>
              </li>
          ))}
      </ul>
  </div>
  
   
            )}

            {/* TOAST КОНТЕЈНЕР */}
            <ToastContainer />
        </div>
    );
}

export default CategoryComponents;
