import { configureStore } from "@reduxjs/toolkit";
import productSlice from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        productStore : productSlice
    }
})

export default store;