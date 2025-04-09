import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { X } from "lucide-react";
import ProductsService from "../services/productService";
import CardProductComponent from "../components/CardProductComponent";
import { FaShopify } from "react-icons/fa";
import { useDispatch } from "react-redux";

function CategoryComponents({ setMenuCategoryOpen }) {
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [isCategoryVisible, setIsCategoryVisible] = useState(false); // Контрола на видливоста на категориите
    const dispatch = useDispatch();

    useEffect(() => {
        // Вчитување на категориите
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
            {/* Копче за прикажување/скривање на категориите */}
            <button
                onClick={() => {
                    setIsCategoryVisible(true); // Показување на категориите
                    setMenuCategoryOpen(true); // Отворање на менито
                    disp
                }}
                className="px-4 py-2 bg-gray-100 text-blackColorText font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
            >
                Прикажи категории
            </button>         
            {/* Приказ на категориите кога менито е отворено */}
            {isCategoryVisible && (
                <div className=" top-0 left-0 w-full bg-white shadow-lg p-4 rounded-lg z-50">
                    <button
                        onClick={() => {
                            setIsCategoryVisible(false); // Скривање на категориите
                            setMenuCategoryOpen(false); // Затворање на менито
                        }}
                        // className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Листа со категории на мали екрани (dropdown) */}
                    <div className="block sm:hidden mt-4">
                        <select
                            onChange={(e) => {
                                // Логика за селектирање на категоријата
                                const selectedCategory = e.target.value;
                                console.log(selectedCategory);
                            }}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                            {category.map((cat, index) => (
                                <option key={index} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Листа со категории на поголеми екрани (хоризонтално подредени, како табела) */}
                    <div className="hidden sm:flex flex-wrap justify-start gap-4 mt-4">
                        {category.map((cat, index) => (
                            <Link
                                onClick={()=>{setCurrentCategory(cat)}}
                                key={index}
                                to={`/category/${cat.id}`}
                                className="px-3 py-1 bg-gray-200  shadow-md hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base md:text-lg"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    {/* <div className="container mx-auto flex items-center justify-center  p-6 ">
                        <FaShopify className="text-mainBlue w-[400px] h-[400px] " />
                    </div> */}

                </div>
            )}



            <ToastContainer />
        </div>
    );
}

export default CategoryComponents;
