import React from 'react'
import useTodos from './useTodos'
import useSWR from 'swr';
import fetcher from './fetcher';

const DataFetchHook = () => {
    // const { todos, loading } = useTodos(5);


    // swr: Provides custom hook for doing the same
    const { data, error, isLoading } = useSWR(
        'https://sum-server.100xdevs.com/todos',
        fetcher
    );
    
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    
  return (
    <>
        {/* {loading ? (
            <div>Loading...</div>
        ) : (
            todos.map((todo, id) => <Track key={id} todo={todo} />)
        )} */}

        {data.todos.map((todo, idx) => (
            <Track key={`todo-${idx}`} todo={todo} />
        ))}
    </>
  )
}

function Track({ todo }) {
    return (
      <div>
        {todo.title}
        <br />
        {todo.description}
      </div>
    );
}

export default DataFetchHook
