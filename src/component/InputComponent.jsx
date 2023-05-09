import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './todoSlice'

export default function InputComponent() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const onInputChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={onInputChange} />
            <button onClick={() => dispatch(add(todo))}>Add</button>
        </div>
    )
}
