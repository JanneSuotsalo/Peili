import React from 'react';
import './CellList.css'


export default class CellList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="listCard">
                <div className="innerCard">
                    <img src={this.props.item.image} />
                    <div className="cardHeader">
                        <h2>#{this.props.item.name.fi}</h2>
                    </div>
                    <div className="cardBody">
                        <p>{this.props.item.description.body}</p>
                    </div>
                    <div className="cardFooter">
                        <h4 className="footerItem">{this.props.item.datetype.type}</h4>
                        <h4 className="footerItem">{this.props.item.datetype.date}</h4>
                    </div>
                </div>
            </div>
        );
    }
}
