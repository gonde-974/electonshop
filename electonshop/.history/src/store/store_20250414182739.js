import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import favoriteSlice from './favoriteSlice';

const store = configureStore({
  reducer: {
    productStore: productSlice,
    cartStore: cartSlice,
    favoriteStore: favoriteSlice
  }
});

export default store;
