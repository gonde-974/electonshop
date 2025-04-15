import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    allFavoriteItems: [],
    totalFavoriteItems: 0
  },
  reducers: {
    saveAllFavoriteItemsAction: (state, action) => {
      const copyArray = [...state.allFavoriteItems];
      const findIndex = copyArray.findIndex(item => item.id === action.payload.id);

      if (findIndex === -1) {
        copyArray.push(action.payload);
        state.totalFavoriteItems++;
      } else {
        copyArray.splice(findIndex, 1);
        state.totalFavoriteItems--;
      }

      state.allFavoriteItems = copyArray;
    }
  }
});

export const { saveAllFavoriteItemsAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;
