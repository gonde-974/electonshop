import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite'
    initialState:{
        allFavoriteItems : []
    },
    reducers:{
        saveAllFavoriteItemsAction : (state,action)=>{
            console.log(action);

        }
    }
})

export const {saveAllFavoriteItemsAction} = favoriteSlice.actions;
export default favoriteSlice.reducer