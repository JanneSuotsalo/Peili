import React from 'react';
import './BackDrop.css'

const backDrop = props => {
    if(props.drawerToggleClickHandler){
        return (<nav className="backdrop" onClick={props.drawerToggleClickHandler} />);
    } else {
        return (<nav className="backdrop" onClick={props.popupClickHandler} />);
    }
}
export default backDrop;
