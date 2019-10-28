import React from 'react';

export default class SmallCard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        //now only one item but will be changed to a list
        return (
            <div className="profileCard1">
                <h2>{this.props.title}</h2>
                <ul id="listItems">
                    <ul>Laitela</ul>
                    <ul>Shakkikerho</ul>
                    <ul>Nuorisotalo Jorma</ul>
                </ul>
            </div>
        );
    }
}
