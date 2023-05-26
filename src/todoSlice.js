import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodoList, addTodo, updateTodo, deleteTodo } from './api';
import { put, takeEvery, call } from 'redux-saga/effects';

export const fetchTodoList = createAsyncThunk('todos/fetchTodoList', async () => {
    return getTodoList();
});

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
    return addTodo(newTodo);
});

export const updateExistingTodo = createAsyncThunk('todos/updateExistingTodo', async (updatedTodo) => {
    return updateTodo(updatedTodo);
});

export const deleteExistingTodo = createAsyncThunk('todos/deleteExistingTodo', async (id) => {
    await deleteTodo(id);
    return id;
});

function* handleFetchTodoList() {
    try {
        const response = yield call(fetchTodoList);
        yield put(fetchTodoList.fulfilled(response));
    } catch (error) {
        yield put(fetchTodoList.rejected(error));
    }
}

function* handleAddNewTodo() {
    try {
        const response = yield call(addNewTodo);
        yield put(addNewTodo.fulfilled(response));
    } catch (error) {
        yield put(addNewTodo.rejected(error));
    }
}

function* handleUpdateExistingTodo() {
    try {
        const response = yield call(updateExistingTodo);
        yield put(updateExistingTodo.fulfilled(response));
    } catch (error) {
        yield put(updateExistingTodo.rejected(error));
    }
}

function* handleDeleteExistingTodo() {
    try {
        yield call(deleteExistingTodo);
        yield put(deleteExistingTodo.fulfilled());
    } catch (error) {
        yield put(deleteExistingTodo.rejected(error));
    }
}

export function* todosSaga() {
    yield takeEvery(fetchTodoList.pending.type, handleFetchTodoList);
    yield takeEvery(addNewTodo.pending.type, handleAddNewTodo);
    yield takeEvery(updateExistingTodo.pending.type, handleUpdateExistingTodo);
    yield takeEvery(deleteExistingTodo.pending.type, handleDeleteExistingTodo);
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodoList.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodoList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(updateExistingTodo.fulfilled, (state, action) => {
                const updatedTodo = action.payload;
                const index = state.list.findIndex((todo) => todo.id === updatedTodo.id);
                if (index !== -1) {
                    state.list[index] = updatedTodo;
                }
            })
            .addCase(deleteExistingTodo.fulfilled, (state, action) => {
                const id = action.payload;
                state.list = state.list.filter((todo) => todo.id !== id);
            });
    },
});

export default todosSlice.reducer;
