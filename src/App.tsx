import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter,setCount]=useState(0);
  const counthandler=()=>{
    setCount(val=>val+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1 data-test-id="count">{counter}</h1>
        <button onClick={counthandler}>Add</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
