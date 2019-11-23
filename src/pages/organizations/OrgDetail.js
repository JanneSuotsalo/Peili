import React from 'react';
import "./OrgDetail.css";


export default class OrgDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="OrgDetail anim">
                    <img src={this.props.item.image}></img>
                    <h3>{this.props.item.name.fi}</h3>
                    <p>{this.props.item.description.body}</p>
                    <h3>Tänään auki</h3>
                    <p>{this.props.item.opening_hours.hours[0].opens}-{this.props.item.opening_hours.hours[0].closes}</p>
                    <div className="OrgBody">
                    <div className="OrgButton a"><a>Tilaa</a></div>
                    <div className="OrgButton b"><a>Vieraile kotisivulla</a></div>
                    <div className="OrgButton c"><a>katso kartalta</a></div>
                </div>
            </div>
        );
    }
}