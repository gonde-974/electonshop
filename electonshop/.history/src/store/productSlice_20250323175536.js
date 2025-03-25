import { createSlice } from "@reduxjs/toolkit";
import { LogIn } from "lucide-react";


const productSlice = createSlice({
    name:'products',
    initialState:{
        allProduct:[]
    },
    reducers:{

        saveAllProductAction:(state,action)=>{
            console.log(action)
            
        }
    }
})

export const {saveAllProductAction} = productSlice.actions;
export default productSlice.reducer;