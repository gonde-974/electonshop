//Логика за поставуванје на производ во корпа

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
        totalProduct : null,
        totalPrice : null
   },
   reducers : {
    saveCartAction : (state,action) =>{
        console.log(action.payload);
        
    }
   }

})


export const {saveCartAction} = cartSlice.actions;
export default cartSlice.reducer;