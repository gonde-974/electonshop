import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Проверете ја точната патека до вашиот productSlice

const store = configureStore({
    reducer: {
        productStore: productReducer
    }
});

export default store;
