import React, { useState } from 'react'

const CreateTodo = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input id='title' style={{padding: 10, margin: 10}} type='text' placeholder='title' onChange={(e) => setTitle(e.target.value)} /><br/>
      <input id='description' style={{padding: 10, margin: 10}} type='text' placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br/>

      <button onClick={() => {
        fetch("http://localhost:3000/todo", {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            description: description
          }),

          // We need to specify the header here, because fetch won't automatically tell our backend that it is a json data.
          headers: {
            "content-type": "application/json"
          }
        })
        .then((res) => res.json())
        .then(() => alert("Todo created!"))
      }}>Add Todo</button>
    </div>
  )
}

export default CreateTodo
