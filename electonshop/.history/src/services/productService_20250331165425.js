import axios from "axios";

class ProductsService {
    static getAllCategory() {
        return axios.get('products/categories')
            .then(response => response.data) // Врати ги податоците
            .catch(error => {
                console.error("Грешка при добивање на категории:", error);
                throw error; // Пренеси ја грешката
            });
    }


    static getAllProducts() {
        return axios.get('product')
            .then(response => response.data) // Врати ги податоците
            .catch(error => {
                console.error("Грешка при добивање на производи:", error);
                throw error; // Пренеси ја грешката
            });
    }

    //Skraten nacin na cod

    static getAllSingleProduct =(productId)=> axios.get(`/products/${productId}`)
}

   
 
export default ProductsService;
