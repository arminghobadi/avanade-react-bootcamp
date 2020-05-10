import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  (window as any).a = React;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          <Arm names={['a','b']}/>
        }
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

const Arm = (names: any) => {
  console.log(names)
  return names.names.map((i: any) => <div>{i}</div>)}