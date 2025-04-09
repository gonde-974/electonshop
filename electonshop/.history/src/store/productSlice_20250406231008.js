

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProduct: [],
        currentCategory: ''
    },
    reducers: {
        saveAllProductAction: (state, action) => {                 
            state.allProduct = action.payload; // Ажурирање на состојбата со новите податоци
        },
        
    }
});

export const { saveAllProductAction } = productSlice.actions;
export default productSlice.reducer;
