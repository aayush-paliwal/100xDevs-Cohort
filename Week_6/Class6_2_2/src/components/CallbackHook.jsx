import React, { useCallback } from 'react'
import { useState } from 'react';

const CallbackHook = () => {
    const [count, setCount] = useState(0);

    // Without hook
    // function logSomething(){
    //     console.log("Child clicked");
    // }

    // With hook
    const logSomething = useCallback(() => {
        console.log("Child clicked");
    }, [])   // Now only if something in this dependency array changes then it means logSomething function changes otherwise it is same as before

    return (
        <div>
            {/* Passing function as a prop */}
            <ButtonComponent inputFunction={logSomething} />
            <button onClick={() => setCount(count+1)}>Click me: {count}</button>
        </div>
    )
}

// Like how we used memo to prevent unnecessary re render when the props don't got changed but that works only for numbers or strings not for functions.
// So to prevent unnecessary re renders when the function passed as the props remains same, we make use of useCallback hook
const ButtonComponent = React.memo(({inputFunction}) => {
    console.log("Renders")

    return (
        <div>
            <button onClick={inputFunction}>Button Clicked</button>
        </div>
    )
})

export default CallbackHook
