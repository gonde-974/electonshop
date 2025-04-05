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

        //pronaoganje na index na proizvodot vo korpata
        copyCartArray.find((item,index)=>{
            if(item.id===action.payload.index){
                findeIndex = index
                return;
            }
        })

        //

        if(findeIndex===null){
            copyCartArray.push({...action.payload,count:1,cartTotal:action.payload.price})
            state.totalProduct ++
            state.totalPrice += action.payload.totalPrice
        }else{
            copyCartArray[findeIndex].count++
        }




             



        state.cart = copyCartArray
    
        
        
    }
   }

})

//Handle cartTotal


export const {saveInCartAction} = cartSlice.actions;
export default cartSlice.reducer;