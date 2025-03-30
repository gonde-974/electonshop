import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { X } from "lucide-react";
import ProductsService from "../services/productService";
import CardProductComponent from "../components/CardProductComponent";

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
            {isCategoryVisible && (
                <div className="absolute top-0 left-0 w-full bg-white shadow-lg p-4 rounded-lg z-50">
                    <button 
                        onClick={() => {
                            setIsCategoryVisible(false); // Скривање на категориите
                            setMenuCategoryOpen(false); // Затворање на менито
                        }} 
                        className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
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

                    {/* Листа со категории на поголеми екрани (табела со редови и колони) */}
                    <div className="hidden sm:block mt-4">
                        <table className="min-w-full table-auto text-center">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 bg-gray-100 text-gray-700 font-semibold">Категорија</th>
                                    <th className="px-6 py-4 bg-gray-100 text-gray-700 font-semibold">Акција</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((cat, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                                        <td className="px-6 py-4">{cat.name}</td>
                                        <td className="px-6 py-4">
                                            <Link
                                                to={`/category/${cat.id}`}
                                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                                            >
                                                Погледни
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default CategoryComponents;
