import React, { useRef, useState } from 'react'
import useInterval from './useInterval'
import useDebounce from './useDebounce';

const TimerBased = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  useInterval(() => {
    setCount(c => c+1)
  }, 1000)

  return (
    <div>
      <h2>Timer is at: {count}</h2>

      <input
        type='text'
        placeholder='Search...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <span>Debounced Value: {debouncedValue}</span>
    </div>
  )
}

export default TimerBased
