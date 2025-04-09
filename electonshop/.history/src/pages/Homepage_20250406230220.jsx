// src/components/CategoryComponents.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { X } from "lucide-react";
import ProductsService from "../services/productService";
import { useDispatch } from "react-redux";
import { setNewCategoryAction } from "../store/productSlice";

function CategoryComponents({ setMenuCategoryOpen }) {
  const [category, setCategory] = useState([]);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getAllCategory()
      .then((res) => {
        if (Array.isArray(res)) {
          const formattedCategories = res.map((cat, index) => ({
            id: cat.id || index,
            name: cat.name || cat,
          }));
          setCategory([{ id: "all", name: "Сите категории" }, ...formattedCategories]);
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
      <button
        onClick={() => setIsCategoryVisible(true)}
        className="px-4 py-2 bg-gray-100 text-black font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
      >
        Прикажи категории
      </button>

      {isCategoryVisible && (
        <div className="top-0 left-0 w-full bg-white shadow-lg p-4 rounded-lg z-50">
          <button
            onClick={() => {
              setIsCategoryVisible(false);
              setMenuCategoryOpen(false);
            }}
            className="text-gray-700 hover:text-red-500 float-right"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Dropdown за мали екрани */}
          <div className="block sm:hidden mt-4">
            <select
              onChange={(e) => {
                const selectedId = e.target.value;
                dispatch(setNewCategoryAction(selectedId));
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

          {/* Хоризонтални линкови за големи екрани */}
          <div className="hidden sm:flex flex-wrap justify-start gap-4 mt-4">
            {category.map((cat, index) => (
              <Link
                key={index}
                to={`/category/${cat.id}`}
                onClick={() => dispatch(setNewCategoryAction(cat.id))}
                className="px-3 py-1 bg-gray-200 shadow-md hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base md:text-lg rounded"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default CategoryComponents;
