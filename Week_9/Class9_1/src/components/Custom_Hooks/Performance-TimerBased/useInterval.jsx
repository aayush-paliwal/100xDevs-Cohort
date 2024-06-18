import React, { useEffect } from 'react'

const useInterval = (fn, timeout) => {
  useEffect(() => {
    const interval = setInterval(() => {
      fn();
    }, timeout);
  
    return () => {
      clearInterval(interval);
    };
  }, [fn, timeout]);
}

export default useInterval
