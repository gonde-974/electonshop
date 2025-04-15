import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        allFavoriteItems : []
    },
    reducers:{
        saveAllFavoriteItemsAction : (state,action)=>{
          let copyArray = [...state.allFavoriteItems];

          let findInex = null;
          copyArray.find((item,index)=>{
            if(item.id===action.payload.id){
                findInex = index
                return;
            }
          })

            

        }
    }
})

export const {saveAllFavoriteItemsAction} = favoriteSlice.actions;
export default favoriteSlice.reducer