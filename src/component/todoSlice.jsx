import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
let itemId = 0;
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        item: [],
        initialId: itemId,
        filter: 'all'
    },
    reducers: {
        add: (state, action) => {
            const newTodo = {
                text: action.payload,
                status: true,
                initialId: itemId + 1
            }
            state.item.push(newTodo)
            itemId++
        },
        change: (state, action) => {
            const [id, status] = action.payload;
            const index = state.item.findIndex(item => item.initialId == id)
            if (status === false)
                state.item.splice(index, 1)
            else {
                state.item[index].status = false
            }
        },
        filterTodo: (state, action) => {
            state.filter = action.payload;
            console.log('filter', state.filter);
        }
    }
})
export const { add, change, filterTodo } = todoSlice.actions
export default todoSlice.reducer
