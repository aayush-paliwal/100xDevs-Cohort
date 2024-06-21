import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //   .then((res) => {
  //     setTodos(res.data.todos)
  //   })
  // }, [])


  return (
   <div>
    {/* Fetching all the todos from the backend */}
      {/* {todos.map((todo) => {
        return (
          <Todo title={todo.title} description={todo.description} />
        )
      })} */}


      {/* Fetching a todo with a specific id from backend */}
      <SpecificTodo id={1} />
   </div>
  )
}

function Todo({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

function SpecificTodo({id}){
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then((res) => {
      setTodo(res.data.todo)
    })
  }, [])

  return (
    <div>
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  )
}



export default App
