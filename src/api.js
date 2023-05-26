import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const TodoService = {
    getTodoList: async (params) => {
        // console.log(params);
        const res = await axios.get('http://localhost:3000/todos', { params: params })
        // console.log(res);
        return res
    },
    addTodoList: async (params) => {
        // console.log(params);
        const res = await axios.post('http://localhost:3000/todos', { title: params })
        // console.log(res);
        return res
    },
    editTodoList: async (params, id) => {
        // console.log(params);
        const res = await axios.put(`http://localhost:3000/todos/${params.id}`, { title: params.title })
        // console.log(res);
        // return res
    },
    deleteTodoList: async (params) => {
        // console.log(params);
        const res = await axios.delete(`http://localhost:3000/todos/${params.id}`)
        // console.log(res);
        // return res
    }
}
export default TodoService