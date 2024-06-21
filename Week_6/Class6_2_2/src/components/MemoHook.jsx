import React from 'react'
import { useState, useEffect, useMemo } from 'react'

// Create an app that does 2 things:
// 1) Increase the counter by 1
// 2) Lets the user put a value in an input box(n) and you need to show sum from 1-n
// One Restriction: Everyting need to be inside MemoHook
const MemoHook = () => {
    const [counter, setCounter] = useState(0);
    const [range, setRange] = useState(1);
    
    // const [sum, setSum] = useState(1);     // Extra useState for solution with useEffect
  
      // Problem:
      // let sum = 0;
      // for(let i=0; i<=range; i++){
      //   sum += i;
      // }
  

      // Solution using useEffect
    //   useEffect(() => {
    //     let n = 0;
    //     for(let i=0; i<=range; i++){
    //       n += i;
    //     }
    //     setSum(n);    // Here this thing is causing an extra re render, which is the only problem with this approach as there are 2 re renders in total
    //   }, [range])
  

      // Solution using useMemo
      let sum = useMemo(() => {
        console.log("asfds")
        let n = 0;
        for(let i=0; i<=range; i++){
          n += i;
        }
        return n;
      }, [range])       // Call this whenever range state changes.
  

      
    return (
      <div>
        <input type='text' placeholder='Enter any value' onChange={(e) => setRange(e.target.value)} />
        <p>Sum from 1 to {range} is: {sum}</p>
  
        {/* As we click on the button the whole App will re render causing the expensive loop to run again for the same input value as in the previous re render */}
        {/* So to avoid this we can make use of useMemo hook to remember the values across rendering */}
        {/* Although we can make use of useEffect to solve this. */}
        <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
      </div>
    )
}

export default MemoHook
