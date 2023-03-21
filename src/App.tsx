import React from 'react';
import logo from './logo.svg';
import Counter from './component/counter';
import './App.css';

class App extends React.Component {
  public render() {
    return <Counter startNumber={1} />;
  }
}

export default App;
