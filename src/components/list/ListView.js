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
                        <a id="link" href={this.props.item.info_url}>{this.props.item.info_url}</a>
                    </div>
                    <div className="listBody">
                        <h4 id="listIconWalking"><FaWalking /> 100 {I18n.t('organizationPage.meter')}</h4>
                        <h4 id="listIconInfo"><FaInfo /><a href={this.props.item.image}>{I18n.t('organizationPage.homepage')}</a></h4>
                        <h4 id="listIconMap"><FaMap /> {I18n.t('organizationPage.location')}</h4>                        
                    </div>
                </div>
        );
    }
}
