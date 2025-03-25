import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productService'

function CategoryComponents() {
    const [category, setCategory] = useState([]);  // ✅ Правилно користење на useState

    useEffect(() => {
        ProductsService.getAllCategory()
            .then((res) =>console.log(res)
            (res))
                
            .catch((err) => console.log("Грешка при добивање на категории:", err));
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
