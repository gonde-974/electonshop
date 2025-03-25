import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productService'

function CategoryComponents() {
    const [category, setCategory] = useState([]);  // ✅ Правилно користење на useState

    useEffect(() => {
        ProductsService.getAllCategory()
            .then((res) => {
                console.log(res); // ✅ Логирање на резултатот
                setCategory(res); // ✅ Чување на категориите во state
            })
            .catch((err) => console.log(err)); // ✅ Фаќање на грешки
    }, []);

    return (
        <div>
            <h2>Категории</h2>
            <ul>
                {category.map((cat, index) => (
                    <li key={index}>{cat.name}</li> // ✅ Прикажување на категории
                ))}
            </ul>
        </div>
    );
}

export default CategoryComponents;
