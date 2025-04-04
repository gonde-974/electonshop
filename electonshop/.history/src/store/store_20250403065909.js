import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer: {
        productStore: productSlice,
        cartStore : cartSlice
    }
});

export default store;
