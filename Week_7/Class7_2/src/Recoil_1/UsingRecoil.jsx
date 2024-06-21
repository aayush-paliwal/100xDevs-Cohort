import React, {useMemo} from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

const UsingRecoil = () => {
  return (
    <div>
      {/* Whenever we need to use recoil logic we need to wrap that component inside RecoilRoot */}
        <RecoilRoot>
            <Count />
        </RecoilRoot>
    </div>
  )
}

function Count(){
    console.log("This will now not get re-rendered");
    return (
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    )
}

function CountRenderer(){
    // Inside of the hook we pass the atom for which we need the value
    const count = useRecoilValue(countAtom)
    return (
        <div>
            <b>{count}</b>
            <EvenCountRenderer />
        </div>
    )
}

function Buttons(){
    // const [count, setCount] = useRecoilState(countAtom);

    const setCount = useSetRecoilState(countAtom);
    console.log("Button component rendered");

    return (
        <div>
            {/* Doing the below thing will cause re-render of the buttons component. But we actually need to re-render only the CountRenderer component */}
            {/* <button onClick={() => {setCount(count + 1)}}>Increment</button> */}
            {/* <button onClick={() => {setCount(count - 1)}}>Decrement</button> */}
            
            {/* This is fine and not cause re-render of this component */}
            <button onClick={() => {setCount((count) => count+1)}}>Increment</button>
            <button onClick={() => {setCount((count) => count - 1)}}>Decrement</button>
        </div>
    )
}

function EvenCountRenderer(){
    const count = useRecoilValue(countAtom);

    // Method-1
    // const isEven = useMemo(() => {
    //     return count % 2;        // It will only run when count changes
    // }, [count]);


    // Method-2
    const isEven = useRecoilValue(evenSelector);

    return <div>
        {(isEven) ? "It is odd" : "It is even"}
    </div>
}

export default UsingRecoil
