import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
  },
  reducers: {
    saveInCartAction: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (itemIndex === -1) {
        // Pravenje na nov object
        const newItem = {
          ...action.payload,
          count: 1,
          cartTotal: action.payload.price,
        };
        state.cart.push(newItem);
        state.totalProduct++;
        state.totalPrice += newItem.price;
      } else {
        state.cart[itemIndex].count++;
        state.cart[itemIndex].cartTotal =
          state.cart[itemIndex].count * state.cart[itemIndex].price;
        state.totalPrice += state.cart[itemIndex].price;
      }
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.cart[itemIndex].count++;
        state.cart[itemIndex].cartTotal =
          state.cart[itemIndex].count * state.cart[itemIndex].price;
        state.totalPrice += state.cart[itemIndex].price;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1 && state.cart[itemIndex].count > 1) {
        state.cart[itemIndex].count--;
        state.cart[itemIndex].cartTotal =
          state.cart[itemIndex].count * state.cart[itemIndex].price;
        state.totalPrice -= state.cart[itemIndex].price;
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        const removedItem = state.cart[itemIndex];
        state.totalPrice -= removedItem.price * removedItem.count;
        state.totalProduct--;
        state.cart.splice(itemIndex, 1);
      }
    },
  },
});

export const {
  saveInCartAction,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
