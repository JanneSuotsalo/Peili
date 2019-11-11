import React from 'react';
import './Simplelist.css'
import I18n from '../Element/LanguageSwticher/I18n';
import { FaWalking, FaInfo, FaMap } from 'react-icons/fa';


export default class Simplelist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="SimplelistCard">
                        <img src={this.props.item.image}></img>
                    <div className="SimplelistHeader">
                        <h4>{this.props.item.name.fi}</h4>
                    </div>
                    <div className="SimplelistBody">
                    <p>kohtaus</p>
                    <p>kohtaus</p>
                    <p>kohtaus</p>
                    <div className="SimpleListSpacer"></div>                    
                    </div>
                </div>
        );
    }
}
