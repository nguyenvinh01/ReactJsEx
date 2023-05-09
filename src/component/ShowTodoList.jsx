import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, filterTodo } from './todoSlice';
import { Button } from 'antd';

export default function ShowTodoList() {
    const todos = useSelector((state) => state.todo.item)
    const filter = useSelector((state) => state.todo.filter)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <Button onClick={() => dispatch(filterTodo('all'))}>All</Button>
                <Button onClick={() => dispatch(filterTodo(true))}>Todo</Button>
                <Button onClick={() => dispatch(filterTodo(false))}>Done</Button>
            </div>
            {todos.map((todo) => {
                if (filter == 'all') return <p key={todo.initialId}>{todo.text} <Button onClick={() => dispatch(change([todo.initialId, todo.status]))}>{todo.status === false ? 'Remove' : 'Finish'}</Button> </p>
                else if (todo.status == filter) return <p key={todo.initialId}>{todo.text} <Button onClick={() => dispatch(change([todo.initialId, todo.status]))}>{todo.status === false ? 'Remove' : 'Finish'}</Button> </p>
            })}
        </div>
    )
}
