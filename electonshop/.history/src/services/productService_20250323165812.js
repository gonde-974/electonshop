import axios from "axios";

class ProductsService {
    static getAllCategory() {
        return axios.get('products/categories')
        
            };
    }


export default ProductsService;
