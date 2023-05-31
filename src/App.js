import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodoList, addNewTodo, updateExistingTodo, deleteExistingTodo } from './todoSlice';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';

import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);

  console.log(todoList, 11111);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoTitle, setEditedTodoTitle] = useState('');

  const handleAddTodo = () => {
    const newTodo = {
      title: 'New Todo',
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleUpdateTodo = (todo) => {
    if (editingTodoId === todo.id) {
      dispatch(updateTodo({ id: editingTodoId, title: editedTodoTitle }));
      setEditingTodoId(null);
      setEditedTodoTitle('');
    } else {
      setEditingTodoId(todo.id);
      setEditedTodoTitle(todo.title);
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditInputChange = (event) => {
    setEditedTodoTitle(event.target.value);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <>
                <input type="text" value={editedTodoTitle} onChange={handleEditInputChange} />
                <button onClick={() => handleUpdateTodo(todo)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => handleUpdateTodo(todo)}
                >
                  {todo.title}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                <button onClick={() => handleUpdateTodo(todo)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
