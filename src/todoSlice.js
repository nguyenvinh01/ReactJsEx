import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";
import TodoService from "./api";

export const fetchTodoListAction = createAsyncThunk('todo/fetchTodoList', async (payload, thunkApi) => {
    const res = await TodoService.getTodoList(payload)
    return res.data
})
export const addTodoListAction = createAsyncThunk('todo/addTodoList', async (payload, thunkApi) => {
    const res = await TodoService.addTodoList(payload)
    // return res.data
})
export const editTodoListAction = createAsyncThunk('todo/editTodoList', async (payload, thunkApi) => {
    const res = await TodoService.editTodoList(payload)
    // return res.data
})
export const deleteTodoListAction = createAsyncThunk('todo/deleteTodoList', async (payload, thunkApi) => {
    const res = await TodoService.deleteTodoList(payload)
    // return res.data
})
export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],

    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodoListAction.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchTodoListAction.fulfilled, (state, action) => {
            state.todos = action.payload
        })
        builder.addCase(addTodoListAction.fulfilled, (state, action) => {
            // state.push(action.payload);
        })
        builder.addCase(addTodoListAction.rejected, (state, action) => {
            // Xử lý lỗi nếu cần
        });
    }
})

export default todoSlice.reducer
