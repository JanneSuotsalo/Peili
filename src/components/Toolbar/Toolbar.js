import React from 'react';
import { Link } from "react-router-dom";
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbarNavigation">
        <div className="toolbarLogo"><img src="PeiliLogo.png" alt="Italian Trulli"/></div>
        <div className="toolbarLogo"><a>PEILI</a></div>
        <div className="toolbarLogo center"><a></a></div>


        <div>
        <DrawerButton click={props.drawClickHandler}/>
        </div>
        <div className="toolbarNavItems">
        </div>
        </nav>
    </header>
);
export default toolbar;