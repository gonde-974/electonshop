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
        // pravenje na kopija na cart state za posigurna rabota
        let copyCartArray = [...state.cart]

        //
        let findeIndex = null;

        //
        copyCartArray.find((item,index)=>{
            if(item.id===action.payload.index){
                findeIndex = index
                return;
            }
        })




             



        state.cart = copyCartArray
    
        
        
    }
   }

})


export const {saveInCartAction} = cartSlice.actions;
export default cartSlice.reducer;