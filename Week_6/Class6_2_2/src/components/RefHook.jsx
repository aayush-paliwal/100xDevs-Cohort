import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react'

const RefHook = () => {
    const [tax, setTax] = useState(10000);
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = 10
        }, 5000)
    }, [])

    return (
        <div>
            Hi, there your tax returns are: <div ref={divRef}>{tax}</div>
        </div>
    )
}

export default RefHook
