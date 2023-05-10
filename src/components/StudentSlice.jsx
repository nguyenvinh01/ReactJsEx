import { createSlice } from "@reduxjs/toolkit";
let userId = 0;
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: [],
    },
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                name: action.payload,
                id: ++userId,
                articles: []
            }
            state.userList.push(newUser)
        },
        addArticles: (state, action) => {
            const [articles, id] = action.payload
            const index = state.userList.findIndex(item => item.id == id)
            console.log(index, 111);
            state.userList[index].articles.push(articles)
        },
        deleteArticles: (state, action) => {
            const [userId, articlesId] = action.payload
            const index = state.userList.findIndex(item => item.id == userId)
            state.userList[index].articles.splice(articlesId, 1);
        },
        deleteUser: (state, action) => {
            const index = state.userList.findIndex(item => item.id == action.payload)
            state.userList.splice(index, 1);
        }
    }
})

export const { addUser, addArticles, deleteArticles, deleteUser } = userSlice.actions

export default userSlice.reducer
