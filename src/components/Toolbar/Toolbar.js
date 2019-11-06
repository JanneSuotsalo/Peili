import React from 'react';
import { Link } from "react-router-dom";
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbarNavigation">
        <div>
        <DrawerButton click={props.drawClickHandler}/>
        </div>
        <div className="toolbarLogo"><a>PEILI</a></div>
        <div className="space"></div>
        <div className="toolbarNavItems">
        </div>
        </nav>
    </header>
);
export default toolbar;