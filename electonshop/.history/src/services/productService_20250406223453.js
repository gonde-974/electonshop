import axios from "axios";

class ProductsService {
    static getAllCategory() {
        return axios.get('/products/categories')
            .then(response => response.data) // Врати ги податоците
            .catch(error => {
                console.error("Грешка при добивање на категории:", error);
                throw error; // Пренеси ја грешката
            });
    }


    static getAllProducts(currentCategory) {
        return axios.get(`/product/category/${currentCategory}`)
            .then(response => response.data) // Врати ги податоците
            .catch(error => {
                console.error("Грешка при добивање на производи:", error);
                throw error; // Пренеси ја грешката
            });
    }

    
}

   
 
export default ProductsService;
