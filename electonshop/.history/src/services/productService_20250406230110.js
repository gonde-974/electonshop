// src/services/productService.js
import axios from "axios";

class ProductsService {
  static getAllCategory() {
    return axios.get("/products/categories")
      .then(response => response.data)
      .catch(error => {
        console.error("Грешка при добивање на категории:", error);
        throw error;
      });
  }

  static getAllProducts(currentCategory) {
    return axios.get(`/product/category/${currentCategory}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Грешка при добивање на производи:", error);
        throw error;
      });
  }
}

export default ProductsService;
