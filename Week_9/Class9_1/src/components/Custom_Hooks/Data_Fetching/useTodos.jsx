import { useEffect, useState } from "react"; 
import axios from "axios";

import React from 'react'

const useTodos = (n) => {
    const [ todos, setTodos ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchTodos = () => {
      setLoading(true);
      axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    };

    useEffect(() => {
        // Hitting the backend every 5s
        const fetchInterval = setInterval(() => {
          fetchTodos();
        }, n*1000);
    
        fetchTodos(); // For first time render
    
        // For case when inbetween the polling, n changes, then we will be having two intervals (one for old n and one for new n). Hence, we need to clear the old interval.
        return () => clearInterval(fetchInterval);
    }, [n]);

    return { todos, loading };
}

export default useTodos
