//Логика за поставуванје на производ во корпа

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
        totalProduct : 0,
        totalPrice : 0
   },
   reducers : {
    saveInCartAction : (state,action) =>{
        console.log(action.payload);
        
    }
   }

})


export const {saveInCartAction} = cartSlice.actions;
export default cartSlice.reducer;