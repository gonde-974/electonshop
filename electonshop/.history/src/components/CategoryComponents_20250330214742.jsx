import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { X } from "lucide-react";
import ProductsService from "../services/productService";
import CardProductComponent from "../components/CardProductComponent";
import { FaShopify } from "react-icons/fa";

function CategoryComponents({ setMenuCategoryOpen }) {
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [isCategoryVisible, setIsCategoryVisible] = useState(false); // Контрола на видливоста на категориите

    useEffect(() => {
        // Вчитување на категориите
        ProductsService.getAllCategory()
            .then((res) => {
                console.log(res);
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
                console.log(res);
                
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
            {/* Копче за прикажување/скривање на категориите */}
            <button
                onClick={() => {
                    setIsCategoryVisible(true); // Показување на категориите
                    setMenuCategoryOpen(true); // Отворање на менито
                }}
                className="px-4 py-2 bg-gray-100 text-blackColorText font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
            >
                Прикажи категории
            </button>

            {/* Почетна страница - кога менито не е отворено */}
            {!isCategoryVisible && (
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Добредојдовте на почетната страница!</h2>
                    {/* Листа со производи кога не е отворено менито за категориите */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.map((product, index) => (
                            <CardProductComponent key={index} product={product} />
                        ))}
                    </div>
                </div>
            )}

            {/* Приказ на категориите кога менито е отворено */}
           {/* Скриј ја почетната страница кога менито за категориите е видливо */}
{!isCategoryVisible && (
    <div className="mt-4">
        <h2 className="text-2xl font-semibold">Добредојдовте на почетната страница!</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product, index) => (
                <CardProductComponent key={index} product={product} />
            ))}
        </div>
    </div>
)}

{/* Осигурај се дека линковите за категории се кликливи и над менито */}
<div className="hidden sm:flex flex-wrap justify-start gap-4 mt-4">
    {category.map((cat, index) => (
        <Link
            key={index}
            to={`/category/${cat.id}`}
            className="px-3 py-1 bg-gray-200 shadow-md hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base md:text-lg"
            style={{ zIndex: 101 }}  // Осигурај се дека линковите се над менито
        >
            {cat.name}
        </Link>
    ))}
</div>


            <ToastContainer />
        </div>
    );
}

export default CategoryComponents;
