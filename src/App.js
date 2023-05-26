import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodoListAction, editTodoListAction, fetchTodoListAction } from './todoSlice';

function App() {
  const dispatch = useDispatch()
  const [todo, setTodos] = useState()
  const todos = useSelector(state => state.todo.todos)

  useEffect(() => {
    const to = dispatch(fetchTodoListAction())

  }, [dispatch])
  console.log(todo, 111);
  return (
    <div className="App">

      <button onClick={() => { dispatch(addTodoListAction('ádsadsd')) }} > sdasđ</button>
      <button onClick={() => { dispatch(editTodoListAction({ id: 3, title: '2123123' })) }} > edit</button>
    </div >
  );
}

export default App;
