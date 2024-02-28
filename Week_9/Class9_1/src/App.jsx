import { useState } from 'react'
import './App.css'
import ClassComponent from './components/Class_Functional_Compo/ClassComponent'
import FunctionalComponent from './components/Class_Functional_Compo/FunctionalComponent'
import ClassEvents from './components/LifeCycle_Events/ClassEvents'
import FunctionEvents from './components/LifeCycle_Events/FunctionEvents'
import DataFetchHook from './components/Custom_Hooks/Data_Fetching/DataFetchHook'
import BrowserHooks from './components/Custom_Hooks/BrowserFunctionality/BrowserHooks'
import TimerBased from './components/Custom_Hooks/Performance-TimerBased/TimerBased'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}

      {/* <ClassEvents /> */}
      {/* <FunctionEvents /> */}
      {/* <DataFetchHook /> */}
      {/* <BrowserHooks /> */}
      <TimerBased />

    </>
  )
}

export default App
