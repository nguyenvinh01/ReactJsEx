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
        isEdit: false,
        initialId: 0
    },
    reducers: {
        setInitialId: (state, action) => {
            state.initialId = action.payload;
        },
        setIsEdit: (state, action) => {
            state.isEdit = action.payload;
        }
    },
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
        builder.addCase(editTodoListAction.fulfilled, (state, action) => {
            console.log(action.payload);
            // const { id, title } = action.payload;
            // console.log(id, 'id');
            // const todo = state.todos.find((todo) => todo.id === id);
            // if (todo) {
            //     todo.title = title;
            // }
        })
        builder.addCase(deleteTodoListAction.fulfilled, (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        });
    }
})

export const { setInitialId, setIsEdit } = todoSlice.actions
export default todoSlice.reducer
