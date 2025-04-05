const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0
    },
    reducers: {
        saveInCartAction: (state, action) => {
            let copyCartArray = [...state.cart];
            let findIndex = copyCartArray.findIndex(item => item.id === action.payload.id);

            if (findIndex === -1) {
                const newItem = {
                    ...action.payload,
                    count: 1,
                    cartTotal: action.payload.price
                };
                copyCartArray.push(newItem);
                state.totalProduct++;
                state.totalPrice += action.payload.price;
            } else {
                copyCartArray[findIndex].count++;
                copyCartArray[findIndex].cartTotal = copyCartArray[findIndex].price * copyCartArray[findIndex].count;
                state.totalPrice += copyCartArray[findIndex].price;
            }

            state.cart = copyCartArray;
        },

        increaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.cart[itemIndex].count++;
                state.cart[itemIndex].cartTotal = state.cart[itemIndex].price * state.cart[itemIndex].count;
                state.totalPrice += state.cart[itemIndex].price;
            }
        },

        decreaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1 && state.cart[itemIndex].count > 1) {
                state.cart[itemIndex].count--;
                state.cart[itemIndex].cartTotal = state.cart[itemIndex].price * state.cart[itemIndex].count;
                state.totalPrice -= state.cart[itemIndex].price;
            }
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                const item = state.cart[itemIndex];
                state.totalPrice -= item.price * item.count;
                state.totalProduct--;
                state.cart.splice(itemIndex, 1);
            }
        }
    }
});

export const {
    saveInCartAction,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
