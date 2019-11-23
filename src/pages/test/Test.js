import React from 'react';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import TestCard from '../../components/card/TestCard';
import TestDetail from '../../pages/testDetail/TestDetail';
import { Trail } from 'react-spring/renderprops'

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
                    <Trail items={this.state.item} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{  transform: 'translate3d(0, 0, 0)',background: 'linear-gradient(to right, #009fff, #ec2f4b)', }}>
                        {item => props =><TestCard style={props} clicked={this.onclick} title={item} />}
                    </Trail>
                </div>
            </div>
        );
    }
}
