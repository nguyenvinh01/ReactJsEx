import { all } from 'redux-saga/effects';
import { watchAddUserSaga, watchGetUserSaga } from './userSlice';

export default function* rootSaga() {
    yield all([watchAddUserSaga(), watchGetUserSaga()]);
}