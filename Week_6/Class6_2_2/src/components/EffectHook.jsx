import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios';

const EffectHook = () => {
    const [clicked, setClicked] = useState(1);

    return (
      <div>
        <button onClick={() => setClicked(1)}>1</button>
        <button onClick={() => setClicked(2)}>2</button>
        <button onClick={() => setClicked(3)}>3</button>
        <button onClick={() => setClicked(4)}>4</button>
  
        <Todo id={clicked} />  
      </div>
    )
}

function Todo({id}){
    const [todo, setTodo] = useState({});
  
    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((res) => {
        setTodo(res.data.todo)
      })
    }, [id])
  
    return (
      <div>
        <h1>{todo.title}</h1>
        <h5>{todo.description}</h5>
      </div>
    )
  }

export default EffectHook
