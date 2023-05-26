import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList, addNewTodo, updateExistingTodo, deleteExistingTodo } from './todoSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  // const todoList = useSelector((state) => state.todos.list);
  const todoList = [
    {
      "id": 4,
      "title": "et porro tempora"
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis"
    },
  ]

  console.log(todoList, 11111);
  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      // Tạo id ngẫu nhiên (thay bằng cách lấy id từ server trong trường hợp thực tế)
      title: event.target.todoText.value,
    };
    dispatch(addNewTodo(newTodo));
    event.target.todoText.value = '';
  };

  const handleUpdateTodo = (id, newText) => {
    const updatedTodo = {
      id: id,
      title: newText,
    };
    dispatch(updateExistingTodo(updatedTodo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteExistingTodo(id));
  };
  return (
    <div className="App">
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* {todoList.title} */}
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleUpdateTodo({ id: todo.id, title: 'Updated Text' })}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
