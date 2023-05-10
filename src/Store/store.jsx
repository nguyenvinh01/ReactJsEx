import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/StudentSlice'
export const store = configureStore({
    reducer: {
        user: userReducer
    },
})