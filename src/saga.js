// import { takeEvery, call, put } from 'redux-saga/effects';
// import { fetchTodoList, addNewTodo, updateExistingTodo, deleteExistingTodo } from './todosSlice';

// function* handleFetchTodoList() {
//     try {
//         const response = yield call(fetchTodoList);
//         yield put(fetchTodoList.fulfilled(response));
//     } catch (error) {
//         yield put(fetchTodoList.rejected(error));
//     }
// }

// function* handleAddNewTodo(action) {
//     try {
//         const response = yield call(addNewTodo, action.payload);
//         yield put(addNewTodo.fulfilled(response));
//     } catch (error) {
//         yield put(addNewTodo.rejected(error));
//     }
// }

// function* handleUpdateExistingTodo(action) {
//     try {
//         const response = yield call(updateExistingTodo, action.payload);
//         yield put(updateExistingTodo.fulfilled(response));
//     } catch (error) {
//         yield put(updateExistingTodo.rejected(error));
//     }
// }

// function* handleDeleteExistingTodo(action) {
//     try {
//         yield call(deleteExistingTodo, action.payload);
//         yield put(deleteExistingTodo.fulfilled(action.payload));
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
import { takeEvery, call, put } from 'redux-saga/effects';
import {
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
} from './todoSlice';
import { getTodos, createTodo, updateTodoAPI, deleteTodoAPI } from './api';

function* handleFetchTodos() {
    try {
        const todos = yield call(getTodos);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

function* handleAddTodoAction(action) {
    try {
        const newTodo = action.payload;
        const todo = yield call(createTodo, newTodo);
        yield put(addTodoSuccess(todo));
    } catch (error) {
        yield put(addTodoFailure(error.message));
    }
}

function* handleUpdateTodoAction(action) {
    try {
        const updatedTodo = action.payload;
        yield call(updateTodoAPI, updatedTodo);
        yield put(updateTodoSuccess(updatedTodo));
    } catch (error) {
        yield put(updateTodoFailure(error.message));
    }
}

function* handleDeleteTodoAction(action) {
    try {
        const id = action.payload;
        yield call(deleteTodoAPI, id);
        yield put(deleteTodoSuccess(id));
    } catch (error) {
        yield put(deleteTodoFailure(error.message));
    }
}

export function* saga() {
    yield takeEvery(fetchTodos.type, handleFetchTodos);
    yield takeEvery(addTodo.type, handleAddTodoAction);
    yield takeEvery(updateTodo.type, handleUpdateTodoAction);
    yield takeEvery(deleteTodo.type, handleDeleteTodoAction);
}
