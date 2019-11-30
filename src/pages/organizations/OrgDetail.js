import React from 'react';
import "./OrgDetail.css";
import { Spring, Transition } from 'react-spring/renderprops';
import Map from '../../components/GoogleMap/GoogleMap';

export default class OrgDetail extends React.Component {
    state = {
        subscribed: false,
        map: false
    }
    constructor(props) {
        super(props)
    }
    

    subscribe = () => {
        if(this.props.subscribed){
           this.props.handleSubscribe(this.props.data);
           this.setState((prevState) => {
            return { subscribed: !prevState.subscribed }
        })
        } else {
        }
    }

    showMap = () => {
        this.setState((prevState) => {
            return { map: !prevState.map }
        })
    }

    render() {
        let subscribe;
        let picOrMap;
        console.log(this.props.subscribed)
        if (this.props.subscribed) {
            subscribe = <div className="OrgButton a" onClick={this.subscribe} ><a>Tilaa</a></div>
        } else {
            subscribe = <div className="OrgButton d" onClick={this.subscribe} ><a>Lopeta tilaus</a></div>
       }

        if (!this.state.map) {
            picOrMap = <img src={this.props.image}></img>
        } else {
            picOrMap =  <Map />
        }
        let show = true;
        return (
            <Spring from={{opacity: 0}} to={{opacity:1}} config={{duration: 1000}} >
                {props => 
                    <div style={props} className="OrgDetail anim">
                        {picOrMap}
                        <h3>{this.props.data.name}</h3>
                        <p>{this.props.data.description.body}</p>
                        <h3>Tänään auki</h3>
                        <p>{this.props.data.opening_hours_today.opens}-{this.props.data.opening_hours_today.closes}</p>
        
                        <div className="OrgBody">
                            {subscribe}
                            <div className="OrgButton b"><a href="https://www.kohtaus.info/" target="_blank">Vieraile kotisivulla</a></div>
                            <div className="OrgButton c" onClick={this.showMap}><a>katso kartalta</a></div>
                        </div>
                    </div>
                }
            </Spring>

        );
    }

}