import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";
import ProductsService from "../services/productService";
import "../index.css"; 

function CategoryComponents() {
    const [category, setCategory] = useState([]);
    const [menuCategoryOpen, setMenuCategoryOpen] = useState(false);

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
            {!menuCategoryOpen && (
                <button onClick={() => setMenuCategoryOpen(true)} className="main-button ">
                    Category
                </button>
            )}

            {/* DROP-DOWN МЕНИ СО `X` КОПЧЕ */}
            {menuCategoryOpen && (
                <div className="dropdown-menu">
                    {/* КОПЧЕ ЗА ЗАТВОРАЊЕ */}
                    <button onClick={() => setMenuCategoryOpen(false)} className="close-button">
                        <X className="w-6 h-6" />
                    </button>

                    {/* ЛИСТА СО КАТЕГОРИИ */}
                    <div className="category-list">
                        {category.map((cat, index) => (
                            <Link key={index} to={`/category/${cat.id}`} className="category-item">
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
