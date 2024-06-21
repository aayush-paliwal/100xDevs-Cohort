import React from 'react'
import { memo, useState } from 'react'

const MemoConcept = () => {
    const [title, setTitle] = useState(0);

    return (
        <div>
            <button onClick={() => setTitle("My name is: " + Math.random())}>Update Title</button>
            
            {/* Ideally, only the first header should re render when we click on the button. However all the components are getting re render because when the setTitle is getting called, it causes the App component to re-render which in turn causing re-render of all of its children. */}
            {/* So to prevent unnecessary re rendering we use memo */}
            <Header title={title} />       
            <Header title="React1" />
            <Header title="React2" />
            <Header title="React3" />
            <Header title="React4" />
            <Header title="React5" />
        </div>
    )
}

// Component before using the React.memo
// function Header({title}){
//   return (
//     <div>{title}</div>
//   )
// }

// To use react memo, we need to wrap the Component that we want to prevent its uncecessary rendering when its props are not changing with React.memo
const Header = memo(function Header({title}){
    return (
      <div>{title}</div>
    )
})

export default MemoConcept
