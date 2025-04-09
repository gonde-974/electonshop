import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalProduct: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    saveInCartAction: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex(item => item.id === product.id);

      if (index === -1) {
        const newItem = {
          ...product,
          count: 1,
          cartTotal: product.price,
        };
        state.cart.push(newItem);
        state.totalProduct++;
        state.totalPrice += product.price;
      } else {
        const existingItem = state.cart[index];
        existingItem.count++;
        existingItem.cartTotal = existingItem.count * existingItem.price;
        state.totalPrice += existingItem.price;
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex(item => item.id === id);

      if (index !== -1) {
        const item = state.cart[index];
        item.count++;
        item.cartTotal = item.count * item.price;
        state.totalPrice += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex(item => item.id === id);

      if (index !== -1 && state.cart[index].count > 1) {
        const item = state.cart[index];
        item.count--;
        item.cartTotal = item.count * item.price;
        state.totalPrice -= item.price;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex(item => item.id === id);

      if (index !== -1) {
        const item = state.cart[index];
        state.totalPrice -= item.count * item.price;
        state.totalProduct--;
        state.cart.splice(index, 1);
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
