import logo from './logo.svg';
import './App.css';
import inputComponent from './component/InputComponent'
import InputComponent from './component/InputComponent';
import ShowTodoList from './component/ShowTodoList';
function App() {
  return (
    <div className="App">
      Todo App
      <InputComponent />
      Todo List:
      <ShowTodoList />
    </div>
  );
}

export default App;
