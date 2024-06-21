import { useState, useEffect, useMemo } from 'react'
import MemoHook from './components/MemoHook';
import EffectHook from './components/EffectHook';
import CallbackHook from './components/CallbackHook';
import RefHook from './components/RefHook';
import './App.css'

function App() {
  return (
    <div>
      {/* <EffectHook /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      <RefHook />
    </div>
  )
}

export default App
