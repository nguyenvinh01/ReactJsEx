import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    status: 'idle'
};

export const getListUser = createAsyncThunk('user/getListUser', async (params, thunkAPI) => {
    const list = await axios.get('http://localhost:3000/users');
    return list;
});

export const deleteUserById = createAsyncThunk('user/deleteUserById', async (params, thunkAPI) => {
    const list = await axios.delete(`http://localhost:3000/users/${params?.id}`);
    thunkAPI.dispatch(getListUser());
    return list;
});
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state.users.splice(index, 1);
            }
        }
    },
    // handle response data from API
    extraReducers: {
        [getListUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getListUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = [...state.users, ...action.payload.data];
        },
        [getListUser.rejected]: (state, action) => {
            state.loading = false;
        },
        [deleteUserById.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteUserById.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = [];
        },
        [deleteUserById.rejected]: (state, action) => {
            state.loading = false;
        },
    }
});

export const { addUser, removeUser } = userSlice.actions;

export const selectUser = (state) => state.user.users;

export default userSlice.reducer;
