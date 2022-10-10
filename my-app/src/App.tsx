import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface apptypes {
  name: string;
  url:string;
  
}

function App(props: apptypes) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={props.url} className="App-logo" alt="logo" />

        <p>{props.name}</p>
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
