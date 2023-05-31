// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getTodoList, addTodo, updateTodo, deleteTodo } from './api';
// import { put, takeEvery, call } from 'redux-saga/effects';

// export const fetchTodoList = createAsyncThunk('todos/fetchTodoList', async (params) => {
//     return getTodoList(params);
// });

// export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
//     return addTodo(newTodo);
// });

// export const updateExistingTodo = createAsyncThunk('todos/updateExistingTodo', async (updatedTodo) => {
//     return updateTodo(updatedTodo);
// });

// export const deleteExistingTodo = createAsyncThunk('todos/deleteExistingTodo', async (id) => {
//     await deleteTodo(id);
//     return id;
// });


// function* handleFetchTodoList() {
//     try {
//         const response = yield call(getTodoList);
//         yield put(fetchTodoList.fulfilled(response));
//     } catch (error) {
//         yield put(fetchTodoList.rejected(error));
//     }
// }

// function* handleAddNewTodo(action) {
//     try {
//         const newTodo = action.payload;
//         const response = yield call(addTodo, newTodo);
//         yield put(addNewTodo.fulfilled(response));
//     } catch (error) {
//         yield put(addNewTodo.rejected(error));
//     }
// }

// function* handleUpdateExistingTodo(action) {
//     try {
//         const updatedTodo = action.payload;
//         const response = yield call(updateTodo, updatedTodo);
//         yield put(updateExistingTodo.fulfilled(response));
//     } catch (error) {
//         yield put(updateExistingTodo.rejected(error));
//     }
// }

// function* handleDeleteExistingTodo(action) {
//     try {
//         const id = action.payload;
//         yield call(deleteTodo, id);
//         yield put(deleteExistingTodo.fulfilled(id));
//     } catch (error) {
//         yield put(deleteExistingTodo.rejected(error));
//     }
// }

// export function* todosSaga() {
//     yield takeEvery(fetchTodoList.pending.type, handleFetchTodoList);
//     yield takeEvery(addNewTodo.pending.type, handleAddNewTodo);
//     yield takeEvery(updateExistingTodo.pending.type, handleUpdateExistingTodo);
//     yield takeEvery(deleteExistingTodo.pending.type, handleDeleteExistingTodo);
// }

// const todosSlice = createSlice({
//     name: 'todos',
//     initialState: {
//         list: [],
//         loading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTodoList.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchTodoList.fulfilled, (state, action) => {
//                 state.list = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchTodoList.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             .addCase(addNewTodo.fulfilled, (state, action) => {
//                 state.list.push(action.payload);
//             })
//             .addCase(updateExistingTodo.fulfilled, (state, action) => {
//                 const updatedTodo = action.payload;
//                 const index = state.list.findIndex((todo) => todo.id === updatedTodo.id);
//                 if (index !== -1) {
//                     state.list[index] = updatedTodo;
//                 }
//             })
//             .addCase(deleteExistingTodo.fulfilled, (state, action) => {
//                 const id = action.payload;
//                 state.list = state.list.filter((todo) => todo.id !== id);
//             });
//     },
// });

// export default todosSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodos: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess: (state, action) => {
            state.todos = action.payload;
            state.loading = false;
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        addTodoSuccess: (state, action) => {
            state.todos.push(action.payload);
            state.loading = false;
        },
        addTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        updateTodoSuccess: (state, action) => {
            const { id, title } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
            }
            state.loading = false;
        },
        updateTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTodo: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        deleteTodoSuccess: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
            state.loading = false;
        },
        deleteTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchTodos,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodo,
    addTodoSuccess,
    addTodoFailure,
    updateTodo,
    updateTodoSuccess,
    updateTodoFailure,
    deleteTodo,
    deleteTodoSuccess,
    deleteTodoFailure,
} = todoSlice.actions;

export default todoSlice.reducer;