import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchTodoList, addNewTodo, updateExistingTodo, deleteExistingTodo } from './todosSlice';

function* handleFetchTodoList() {
    try {
        const response = yield call(fetchTodoList);
        yield put(fetchTodoList.fulfilled(response));
    } catch (error) {
        yield put(fetchTodoList.rejected(error));
    }
}

function* handleAddNewTodo(action) {
    try {
        const response = yield call(addNewTodo, action.payload);
        yield put(addNewTodo.fulfilled(response));
    } catch (error) {
        yield put(addNewTodo.rejected(error));
    }
}

function* handleUpdateExistingTodo(action) {
    try {
        const response = yield call(updateExistingTodo, action.payload);
        yield put(updateExistingTodo.fulfilled(response));
    } catch (error) {
        yield put(updateExistingTodo.rejected(error));
    }
}

function* handleDeleteExistingTodo(action) {
    try {
        yield call(deleteExistingTodo, action.payload);
        yield put(deleteExistingTodo.fulfilled(action.payload));
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
