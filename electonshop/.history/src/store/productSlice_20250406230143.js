// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProduct: [],
    currentCategory: "smartphones",
  },
  reducers: {
    saveAllProductAction: (state, action) => {
      state.allProduct = action.payload;
    },
    setNewCategoryAction: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { saveAllProductAction, setNewCategoryAction } = productSlice.actions;
export default productSlice.reducer;
