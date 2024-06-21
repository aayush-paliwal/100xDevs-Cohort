import React from 'react'
import CountRenderer from './CountRenderer'
import Buttons from './Buttons'

const Count = ({ count, setCount }) => {
  return (
    <div>
        <CountRenderer count={count} />
        <Buttons count={count} setCount={setCount} />
    </div>
  )
}

export default Count
