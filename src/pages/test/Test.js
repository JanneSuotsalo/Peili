import React from 'react';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import TestCard from '../../components/card/TestCard';
import TestDetail from '../../pages/testDetail/TestDetail';

import './Test.css'

export default class Test extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        item: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        show: false
    }

    testClicked = () => {
        
        this.props.popPopup();
        this.props.popHandler();
    };

    onclick = () => {
        this.testClicked();
    }

    render() {
        let popup
        if (this.props.showPopup) {
            popup = <TestDetail close={this.testClicked} />
        }
        return (
            <div className="TestBody">
                {popup}
                <div className="TestHeader">
                    <h1>{I18n.t('testpage.header')}</h1>
                    <p>{I18n.t('testpage.headerText')}</p>
                </div>
                <div className="testList">
                    {this.state.item.map((item) => (
                        <TestCard clicked={this.onclick} title={item} />
                    ))}
                </div>
            </div>
        );
    }
}
