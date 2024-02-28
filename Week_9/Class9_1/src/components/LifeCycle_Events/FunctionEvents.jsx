import React, { useEffect, useState } from 'react';

const FunctionEvents = () => {
  const [render, setRender] = useState(true);

  // Unrender the component after 10s.
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 5000)
  }, [])

  return (
    <>
      {
        render ? <Events /> : <div></div>
      }
    </>
  )
}

const Events = () => {

  useEffect(() => {
    console.log('Component mounted');

    // This function will run whenever the component unmounts or dependency array changes(Whenever the dependency array will change previous effect will be cleared and new one got logged).
    return () => console.log('Component unmounted');
  }, []);

  return <h1>Functional events</h1>;
}

export default FunctionEvents;