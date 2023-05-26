import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todosReducer, { todosSaga } from '../todoSlice';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware,
});

sagaMiddleware.run(todosSaga);