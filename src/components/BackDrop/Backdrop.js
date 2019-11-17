import React from 'react';
import './BackDrop.css'

const backDrop = props => {
    if(props.drawerToggleClickHandler){
        return (<nav className="backdrop" onClick={props.drawerToggleClickHandler} />);
    } else {
        return (<nav className="backdrop" onClick={() => {
            
            props.organizationHandler();
            props.popPopUp();
            props.popupClickHandler();
        }} />);
    }
}
export default backDrop;
