import { useState } from 'react'
// import './App.css'
import BusinessCard from './components/BusinessCard'
import { Card } from '../../solutions/level-1/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BusinessCard name="Aayush" about="Coding" interests={["Code", "Sleep", "Play"]} twitterUrl="/" linkedinUrl="/"  />
      <Card name="Aayush" description="Coding" interests={["Code", "Sleep", "Play"]} twitter="/" linkedin="/"  />
    </div>
  )
}

export default App
