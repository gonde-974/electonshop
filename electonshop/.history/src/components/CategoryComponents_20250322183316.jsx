import React, { useState } from 'react'

function CategoryComponents() {

    
    const {category,setCategory} = useState([])  
    
    useEffect(() => {
        fetch("https://api.example.com/data") // Додај валиден API повик
            .then((res) => res.json()) // Претворање на одговорот во JSON
            .then((data) => console.log(data)) // Логирање на податоците
            .catch((err) => console.log(err)); // Фаќање на грешки
    }, []);

    
    

  return (
    <div>CategoryComponents</div>
  )
}

export default CategoryComponents