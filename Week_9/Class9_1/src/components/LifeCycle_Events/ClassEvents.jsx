import React from 'react';

class ClassEvents extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    return <h1>Class Event!</h1>;
  }
}
ClassEvents;
export default ClassEvents;