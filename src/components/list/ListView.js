import React from 'react';
import './List.css'
import { FaWalking, FaInfo, FaMap } from 'react-icons/fa';


export default class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(JSON.stringify(this.props.item))
        return (
            <div className="listMain">
                <div className="listCard">
                    <div className="listImage">
                        <img src={this.props.item.image}></img>
                    </div>
                    <div className="listHeader">
                        <h2>{this.props.item.name.fi}</h2>
                        <a id="link" href={this.props.item.info_url}>{this.props.item.info_url}</a>
                    </div>
                    <div className="listBody">
                        <div className="mobileBody">
                        <h4 id="listIconWalking"><FaWalking /> 100 metriä</h4>
                        <h4 id="listIconInfo"><FaInfo /><a href={this.props.item.image}>kotisivu</a></h4>
                        <h4 id="listIconMap"><FaMap /> Sijainti</h4>                        
                        </div>
                        <p id="listDetail">{this.props.item.description.body}</p>
                    </div>
                </div>
            </div>

        );
    }
}
