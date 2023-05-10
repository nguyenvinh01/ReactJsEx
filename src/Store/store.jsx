import productSlice from '../components/ProductSlice';
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
        product: productSlice,
    },
})