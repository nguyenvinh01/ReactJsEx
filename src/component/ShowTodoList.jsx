import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, filterTodo } from './todoSlice';

export default function ShowTodoList() {
    const todos = useSelector((state) => state.todo.item)
    const filter = useSelector((state) => state.todo.filter)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={() => dispatch(filterTodo('all'))}>All</button>
                <button onClick={() => dispatch(filterTodo(true))}>Todo</button>
                <button onClick={() => dispatch(filterTodo(false))}>Done</button>
            </div>
            {todos.map((todo) => {
                if (filter == 'all') return <p key={todo.initialId}>{todo.text} <button onClick={() => dispatch(change([todo.initialId, todo.status]))}>{todo.status === false ? 'Remove' : 'Finish'}</button> </p>
                else if (todo.status == filter) return <p key={todo.initialId}>{todo.text} <button onClick={() => dispatch(change([todo.initialId, todo.status]))}>{todo.status === false ? 'Remove' : 'Finish'}</button> </p>
            })}
        </div>
    )
}
