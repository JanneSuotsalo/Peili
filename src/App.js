import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Organization from "./pages/organizations/Organization";
import Profile from "./pages/profile/Profile";
import Login from "./pages/signIn/Login"
import Register from "./pages/signIn/Register"
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ul id="nav">
            <li>
              <Link to="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link to="/organization">
                <a>Organization</a>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <a>Register</a>
              </Link>
            </li>
          </ul>
        </div>

        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/organization">
          <Organization />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
