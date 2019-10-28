import React from 'react';
import logo from './logo.svg';
import './App.css';
import Organization from './pages/organizations/Organization';
import Profile from './pages/profile/Profile';

function App() {
return (
  <Organization/>
  )
 /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> HELLO WORLD.
        </p>
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
  );*/
}

export default App;
