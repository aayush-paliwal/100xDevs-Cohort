import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Count is: {count}
        </button> */}

        <CreateButton count={count} setCount={setCount} />
      </div>
  )
}

function CreateButton({count, setCount}){
  return (
    <button onClick={() => setCount(count+1)}>Count: {count}</button>
  )
}

export default App
