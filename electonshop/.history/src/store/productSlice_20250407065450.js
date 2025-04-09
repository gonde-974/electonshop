

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProduct: [],
        currentCategory: 'smartphones'
    },
    reducers: {
        saveAllProductAction: (state, action) => {                 
            state.allProduct = action.payload; // Ажурирање на состојбата со новите податоци
        },

        setCurrentCategory :(state,action) =>{
            state.currentCategory = action.payload;
        }
        
    }
});

export const { saveAllProductAction } = productSlice.actions;
export default productSlice.reducer;
