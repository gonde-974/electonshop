import axios from "axios"

class ProductsService {
    static getAllCategory = axios.get('products/categories')
}

export default ProductsService;
