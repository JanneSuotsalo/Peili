import React from 'react';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import TestCard from '../../components/card/TestCard';
import './Test.css'

export default class Test extends React.Component {
    //fetch somewhere
    state = {
        item: [1,2,3,4,5,6,7,8,9,10]
    }
    
    render() {
        return (
            <div className="TestBody">
                <div className="TestHeader">
                    <h1>{I18n.t('testpage.header')}</h1>
                    <p>{I18n.t('testpage.headerText')}</p>
                </div>
                <div className="testList">
                {this.state.item.map((item) => (
                    <TestCard title={item}/>
                ))}
                </div>
            </div>
        );
    }
}
