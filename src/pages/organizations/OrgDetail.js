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
        this.setState((prevState) => {
            return { subscribed: !prevState.subscribed }
        })
    }

    showMap = () => {
        this.setState((prevState) => {
            return { map: !prevState.map }
        })
    }

    render() {
        let subscribe;
        let picOrMap;

        if (!this.state.subscribed) {
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
            <Transition
            items={show}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
                {show => show && (props =>
                    <div style={props} className="OrgDetail anim">
                        {picOrMap}
                        <h3>{this.props.item.name.fi}</h3>
                        <p>{this.props.item.description.body}</p>
                        <h3>Tänään auki</h3>
                        <p>{this.props.item.opening_hours.hours[0].opens}-{this.props.item.opening_hours.hours[0].closes}</p>
                        <div className="OrgBody">
                            {subscribe}
                            <div className="OrgButton b"><a href="https://www.kohtaus.info/" target="_blank">Vieraile kotisivulla</a></div>
                            <div className="OrgButton c" onClick={this.showMap}><a>katso kartalta</a></div>
                        </div>
                    </div>
                )}
            </Transition>

        );
    }

}