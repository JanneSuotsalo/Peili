import React from 'react';
import './SideDrawer.css';
const sideDrawer = props => (
    <nav className="sideDrawer">
       <ul>
            <li>
                <a onClick={()=> props.routeHandler("profile")}>Profile</a>
            </li>
            <li>
                <a onClick={()=> props.routeHandler("Feed")}>Feed</a>
            </li>
            <li>
                <a onClick={()=> props.routeHandler("organization")}>Organization</a>
            </li>
            <li>
                <a onClick={()=> props.routeHandler("test")}>Quizes</a>
            </li>
            <li>
                <a onClick={()=> props.routeHandler("login")}>Login</a>
            </li>
            <li>
                <a onClick={()=> props.routeHandler("register")}>Register</a>
            </li>
          </ul>
    </nav>

    );

export default sideDrawer;