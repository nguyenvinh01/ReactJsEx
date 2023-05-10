import { createSlice } from "@reduxjs/toolkit";
let phonebookId = 0;
export const phonebookSLice = createSlice({
    name: 'phonebook',
    initialState: {
        phoneBook: [],
        filterOption: true,
    },
    reducers: {
        addPhoneBook: (state, action) => {
            const [name, num] = action.payload
            const newPhoneBook = {
                id: phonebookId,
                name: name,
                num: num,
                status: false
            }
            state.phoneBook.push(newPhoneBook)
            phonebookId++
        },
        addFavorite: (state, action) => {
            const index = state.phoneBook.findIndex((num) => num.id == action.payload)
            console.log(state.condition, 111122);
            state.phoneBook[index].status = true
        },
        deleteNum: (state, action) => {
            const index = state.phoneBook.findIndex((num) => num.id = action.payload)
            state.phoneBook.splice(index, 1)
        },
        filterOption: (state, action) => {
            state.filterOption = action.payload
            // state.condition = (action.payload) ? 'pBook.status == true' : 'pBook.status == false'
            state.condition = action.payload;
        }
    }
})

export const { addPhoneBook, addFavorite, deleteNum, filterOption } = phonebookSLice.actions

export default phonebookSLice.reducer