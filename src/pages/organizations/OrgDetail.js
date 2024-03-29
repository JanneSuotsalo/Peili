import React from 'react';
import "./OrgDetail.css";
import { Spring } from 'react-spring/renderprops';
import Map from '../../components/GoogleMap/GoogleMap';


/*
Popup window where you can see the single organisations detail. Just a div with smaller height & width
  

*/
export default class OrgDetail extends React.Component {
    state = {
        map: false
    }

    subscribe = () => {
        if(this.props.subscribed){
           this.props.handleSubscribe(this.props.data);
        } else {
            this.props.handleUnsubscribe(this.props.data);
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
            subscribe = <div className="OrgButton a" onClick={this.subscribe} ><div>Tilaa</div></div>
        } else {
            subscribe = <div className="OrgButton d" onClick={this.subscribe} ><div>Lopeta tilaus</div></div>
       }

        if (!this.state.map) {
            picOrMap = <img alt="img" src={this.props.image}></img>
        } else {
            picOrMap =  <Map />
        }
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
                            <div className="OrgButton b"><a href="https://www.kohtaus.info/" target="#">Vieraile kotisivulla</a></div>
                            <div className="OrgButton c" onClick={this.showMap}><div>katso kartalta</div></div>
                        </div>
                    </div>
                }
            </Spring>

        );
    }

}