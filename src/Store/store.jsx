import { configureStore } from '@reduxjs/toolkit'
import studentSlice from '../components/StudentSlice'
export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        student: studentSlice
    },
})