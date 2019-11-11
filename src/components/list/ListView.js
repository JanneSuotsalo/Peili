import React from 'react';
import './List.css'
import I18n from '../../components/Element/LanguageSwticher/I18n';
import { FaWalking, FaInfo, FaMap } from 'react-icons/fa';


export default class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="listCard">
                        <img src={this.props.item.image}></img>
                    <div className="listHeader">
                        <h2 id="head">{this.props.item.name.fi}</h2>
                    </div>
                </div>
        );
    }
}
