import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'

const store = configureStore({
    reducer: {
        productStore: productSlice
    }
});

export default store;
