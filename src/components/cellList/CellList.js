import React from 'react';
import './CellList.css'


export default class CellList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="innerCard">
                    <img src={this.props.item.image} />
                    <h2>#{this.props.item.name.fi}</h2>
                    <p>{this.props.item.description.body}</p>
                    <h4>{this.props.item.datetype.type} {this.props.item.datetype.date}</h4>
                </div>
        );
    }
}
