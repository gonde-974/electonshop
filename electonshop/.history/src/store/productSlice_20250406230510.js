

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

        setNewCategoryAction:(state,action)=>{
            state.currentCategory = action.payload;
        }
    }
});

export const { saveAllProductAction,setNewCategoryAction } = productSlice.actions;
export default productSlice.reducer;
