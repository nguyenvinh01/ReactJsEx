import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodoListAction, deleteTodoListAction, editTodoListAction, fetchTodoListAction, setInitialId, setIsEdit } from './todoSlice';

function App() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  // const [todos, setTodo] = useState([])
  const todos = useSelector(state => state.todo.todos)
  const { isEdit, initialId } = useSelector(state => state.todo)

  useEffect(() => {
    // dispatch(fetchTodoListAction()).then(res => setTodo(res.payload))
    dispatch(fetchTodoListAction())

  }, [dispatch], [todos])
  console.log(todos, 11221, inputValue, isEdit, initialId);
  const addTodo = () => {
    if (!isEdit) dispatch(addTodoListAction(inputValue))
    else {
      dispatch(editTodoListAction({ id: initialId, title: inputValue }))
    }
    setInputValue('')
    dispatch(setIsEdit(false))
    window.location.reload();
  }
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={(event => setInputValue(event.target.value))} />
      <button onClick={addTodo} > {(isEdit ? 'Edit' : 'Add')}</button>
      {todos.map((todo) => {
        return <p>{todo.title}
          <button
            onClick={
              () => {
                setInputValue(todo.title)
                dispatch(setInitialId(todo.id))
                dispatch(setIsEdit(true))
              }
            }>
            Edit
          </button>
          <button onClick={() => {
            dispatch(deleteTodoListAction(todo.id))
            window.location.reload();
          }}>
            Delete
          </button>
        </p>
      })}
    </div >
  );
}

export default App;
