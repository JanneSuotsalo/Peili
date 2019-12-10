import React from 'react';
import './List.css'

export default class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                    <div style={this.props.style} className="listCard" onClick={this.props.click}>
                        <img alt="dsa" src={this.props.item.image}></img>
                        <div className="listHeader">
                            <h2 id="head">{this.props.item.name.fi}</h2>
                            <p>{this.props.item.description.body}</p>
                            <p id="open">8.00-16.00</p>

                        </div>
                    </div>
        );
    }
}
