import React, { useEffect, useState } from 'react';
import ProductsService from '../services/productService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Вклучи стилови за toast

function CategoryComponents() {
    const [category, setCategory] = useState([]);

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
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { background: "#C33131", color: "#FFFFFF" } // Main Red
                });
            });
    }, []);

    return (
        <div>
            <h2 style={{ color: "#003F62" }}>Категории</h2> {/* Main Blue */}
            <ul>
                {category.map((cat, index) => (
                    <li key={index} style={{ color: "#292D32" }}> {/* Black Text Color */}
                        <div>
                            <Link>{cat.name}</Link>
                        </div>
                    </li>
                ))}
            </ul>
            <ToastContainer /> {/* Контејнер за прикажување на Toast пораки */}
        </div>
    );
}

export default CategoryComponents;
