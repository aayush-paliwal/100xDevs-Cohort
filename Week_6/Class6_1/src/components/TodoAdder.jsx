import React from 'react'
import { useState } from 'react'


let counter = 4;
const TodoAdder = () => {
    const [todos, setTodos] = useState([{
        id: 1,
        title: "Gym",
        description: "Let's do gym today"
      }, {
        id: 2,
        title: "Code",
        description: "Doing some coding"
      }, {
        id: 3,
        title: "Playing",
        description: "Playing cricket"
    }])
    
    
    function addTodo(){
        setTodos([...todos, {
            id: counter++,
            title: Math.random(),
            description: Math.random()
        }])
    }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>

    {
        todos.map(todo => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />
        })
    }
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

export default TodoAdder
