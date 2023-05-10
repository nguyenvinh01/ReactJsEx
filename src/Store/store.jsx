import { configureStore } from '@reduxjs/toolkit'
import phonebookSLice from '../components/PhonebookSlice'
export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        phonebook: phonebookSLice
    },
})