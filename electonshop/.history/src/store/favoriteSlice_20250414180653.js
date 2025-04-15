import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        allFavoriteItems : [],
        totalFavoriteItems : 0
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

          if(findInex === null){
            copyArray.push(action.payload);
            state.totalFavoriteItems ++;
          }else{
            copyArray.splace(findInex,1)
           state.totalFavoriteItems --
          }

            state.allFavoriteItems = copyArray;

        }
    }
})

export const {saveAllFavoriteItemsAction} = favoriteSlice.actions;
export default favoriteSlice.reducer