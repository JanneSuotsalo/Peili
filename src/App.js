import React from 'react';
import logo from './logo.svg';
import './App.css';
import Organization from './pages/organizations/Organization';
import Profile from './pages/profile/Profile';
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import Test from './pages/test/Test';

  
function App() {
  return (
    <div>
    <h1>NavBar</h1>

    <BrowserRouter>
        <Route path="/organization">
          <Organization />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
    </BrowserRouter>
    </div>

  );
}

export default App;
