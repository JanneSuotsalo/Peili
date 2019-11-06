import React from 'react';
import './BackDrop.css'

const backDrop = props => (
    <nav className="backdrop" onClick={props.drawerToggleClickHandler}/>);

export default backDrop;