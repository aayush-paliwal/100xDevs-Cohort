import React, { useState } from 'react'
import Count from './LearnPropDrill/Count'

const PropDrillPart = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

export default PropDrillPart
