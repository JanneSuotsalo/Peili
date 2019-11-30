import React from 'react';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import TestCard from '../../components/card/TestCard';
import TestDetail from '../../pages/testDetail/TestDetail';
import { Trail } from 'react-spring/renderprops'
import './Test.css'

var data = require('../../test.json');


export default class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        item: [data.tasks[0].task, data.tasks[0].task1, data.tasks[0].task2, data.tasks[0].task3],
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
        console.log(this.state.item)
        if (this.props.showPopup) {
            popup = <TestDetail click={this.onclick} close={this.testClicked} />
        }
        return (
            <div className="TestBody">
                {popup}
                <div className="TestHeader">
                    <h1>{I18n.t('testpage.header')}</h1>
                    <p>{I18n.t('testpage.headerText')}</p>
                </div>
                <div className="testList">
                    <Trail items={this.state.item} keys={item => item} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{  transform: 'translate3d(0, 0, 0)'}}>
                        {item => props =><TestCard style={props} clicked={this.onclick} title={item} />}
                    </Trail>
                </div>
            </div>
        );
    }
    white() {
        return '#FFFF';
    }
    style() {
        return '#' + Math.random().toString(16).substr(-6);
    }
}
