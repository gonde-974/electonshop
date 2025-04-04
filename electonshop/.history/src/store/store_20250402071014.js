import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer: {
        productStore: productSlice,
        cartStote : cartSlice
    }
});

export default store;
