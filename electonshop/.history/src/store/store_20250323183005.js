import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; 

const store = configureStore({
    reducer: {
        productStore: productReducer
    }
});

export default store;
