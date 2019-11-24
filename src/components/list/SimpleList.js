import React from 'react';
import './Simplelist.css'
import I18n from '../Element/LanguageSwticher/I18n';
import { FaWalking, FaInfo, FaMap } from 'react-icons/fa';
import { Spring } from 'react-spring/renderprops'


export default class Simplelist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.style} className="SimplelistCard" onClick={this.props.click}>
                <img src={this.props.item.image}></img>
                <div className="SimplelistHeader">
                    <h4>{this.props.item.name.fi}</h4>
                </div>
                <div className="SimplelistBody">
                    <p>{this.props.item.description.body}</p>
                    <div className="SimpleListSpacer"></div>
                </div>
            </div>
                
        );
}
}
