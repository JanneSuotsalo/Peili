import React from 'react';
import './SmallCard.css';

export default class SmallCard extends React.Component {
    render() {
        //now only one item but will be changed to a list
          
        return (
            <div className="smallCardMain">
            <div className={this.props.highlight ? 'cardBig smallCard ' : 'cardSmall smallCard'}>
                <h2>{this.props.title}</h2>
                <ul className="profileList">
                    <p>Laitela</p>
                    <p>Laitela</p>
                    <p>Laitela</p>
                </ul>
                <div className="spacerProf"></div>
            </div>
            </div>
        );
    }
}
