import React from 'react';
import { Link } from "react-router-dom";
import './SideDrawer.css';

const sideDrawer = props => {
    let drawAnim = 'sideDrawer';
    if(props.show){
        drawAnim = 'sideDrawer open';
    }    

return(
    <nav className={drawAnim}>
       <ul>
            <Link to="/profile">
            <li>
                <a onClick={props.closeDraw}>Profile</a>
            </li>
            </Link>
            <Link to="/Feed">
            <li>
                <a onClick={props.closeDraw}>Feed</a>
            </li>
            </Link>
            <Link to="/organization">
            <li>
                <a onClick={props.closeDraw}>Organization</a>
            </li>
            </Link>
            <Link to="/test">
            <li>
                <a onClick={props.closeDraw}>Quizes</a>
            </li>
            </Link>
            <Link to="/login">
            <li>
                <a onClick={props.closeDraw}>Login</a>
            </li>
            </Link>
            <Link to="/register">
            <li>
                <a onClick={props.closeDraw}>Register</a>
            </li>
            </Link>

          </ul>
    </nav>

    );
}
export default sideDrawer;