import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        allFavoriteItems : []
    },
    reducers:{
        saveAllFavoriteItemsAction : (state,action)=>{
            

        }
    }
})

export const {saveAllFavoriteItemsAction} = favoriteSlice.actions;
export default favoriteSlice.reducer