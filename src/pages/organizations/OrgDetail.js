import React from 'react';
import "./OrgDetail.css";
import { Spring } from 'react-spring/renderprops';


export default class OrgDetail extends React.Component {
    state = {
        subscribed: false
    }
    constructor(props) {
        super(props)
    }

    subscribe = () => {
        this.setState((prevState) => {
            return {subscribed: !prevState.subscribed} 
        })
    }
    render() {
        let subscribe;

        if(!this.state.subscribed){
            subscribe = <Spring from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 1000 }}>
            {props => <div style={props} className="OrgButton a" onClick={this.subscribe} ><a>Tilaa</a></div>}</Spring>
        } else {
            subscribe = <Spring from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ duration: 2000, background: "#bf0433"}}>
            {props => <div style={props} className="OrgButton c" onClick={this.subscribe} ><a>Lopeta tilaus</a></div>}</Spring>
        }
        return (
            <div className="OrgDetail anim">
                    <img src={this.props.item.image}></img>
                    <h3>{this.props.item.name.fi}</h3>
                    <p>{this.props.item.description.body}</p>
                    <h3>Tänään auki</h3>
                    <p>{this.props.item.opening_hours.hours[0].opens}-{this.props.item.opening_hours.hours[0].closes}</p>
                    <div className="OrgBody">
                    {subscribe}
                    <div className="OrgButton b"><a href="https://www.kohtaus.info/" target="_blank">Vieraile kotisivulla</a></div>
                    <div className="OrgButton c"><a>katso kartalta</a></div>
                </div>
            </div>
        );
    }
}