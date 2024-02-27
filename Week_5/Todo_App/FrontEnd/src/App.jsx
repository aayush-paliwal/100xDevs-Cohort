import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((data) => setTodos(data.todos));
  }, [])

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
