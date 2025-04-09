import axios from "axios";

class ProductsService {
    // Земи ги сите категории
    static getAllCategory() {
        return axios.get('products/categories/')
            .then(response => response.data)
            .catch(error => {
                console.error("Грешка при добивање на категории:", error);
                throw error;
            });
    }

    // Земи ги сите производи
    static getAllProducts() {
        return axios.get('product')
            .then(response => response.data)
            .catch(error => {
                console.error("Грешка при добивање на производи:", error);
                throw error;
            });
    }

    // ➕ Земи производи според категорија
    static getProductsByCategory(categoryId) {
        // Ако е "all", врати ги сите производи
        if (categoryId === "all") {
            return this.getAllProducts();
        }

        // Инаку повикај ендпоинт за категорија (ако го имаш backend тоа подготвено)
        return axios.get(`products/category/${categoryId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Грешка при добивање производи за категорија ${categoryId}:`, error);
                throw error;
            });
    }
}

export default ProductsService;
