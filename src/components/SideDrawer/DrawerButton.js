import React from 'react';
import './DrawerButton.css'

const drawerButton = props => (
    <button className="toggleButton" onClick={props.click}>
        <div className="menuLine"/>
        <div className="menuLine"/>
        <div className="menuLine"/>
    </button>
);

export default drawerButton;