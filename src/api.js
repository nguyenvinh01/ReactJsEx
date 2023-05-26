import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Thay thế BASE_URL bằng URL của API thực tế

export const getTodoList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todos`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch todo list');
    }
};

export const addTodo = async (newTodo) => {
    try {
        const response = await axios.post(`${BASE_URL}/todos`, newTodo);
        return response.data;
    } catch (error) {
        throw new Error('Failed to add todo');
    }
};

export const updateTodo = async (updatedTodo) => {
    try {
        const response = await axios.put(`${BASE_URL}/todos/${updatedTodo}`, { title: updatedTodo });
        return response.data;
    } catch (error) {
        throw new Error('Failed to update todo');
    }
};

export const deleteTodo = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/todos/1`);
    } catch (error) {
        throw new Error('Failed to delete todo');
    }
};
