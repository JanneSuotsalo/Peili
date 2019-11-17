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
                <div className="listCard" onClick={this.props.click}>
                        <img src={this.props.item.image}></img>
                    <div className="listHeader">
                        <h2 id="head">{this.props.item.name.fi}</h2>
                        <p>liirum laarum here </p>
                        <p id="open">8.00-16.00</p>

                    </div>
                </div>
        );
    }
}
