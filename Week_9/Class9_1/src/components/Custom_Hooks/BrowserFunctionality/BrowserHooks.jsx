import React from 'react'
import useIsOnline from './useIsOnline'
import useMousePointer from './useMousePointer';

const BrowserHooks = () => {
    const isOnline = useIsOnline();
    const mousePosition = useMousePointer();
  return (
    <div>
        {isOnline ? <h1>User online</h1> : <h2>User offline</h2>}

        <h2>Mouse position is: {mousePosition.x} {mousePosition.y}</h2>
    </div>
  )
}

export default BrowserHooks
