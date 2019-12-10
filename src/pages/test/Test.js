import React from 'react';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import TestCard from '../../components/card/TestCard';
import TestDetail from '../../pages/testDetail/TestDetail';
import { Trail } from 'react-spring/renderprops'
import './Test.css'

var data = require('../../test.json');
/*
    All of the tests are listed in this page.
    Tests are mount in componentWillMount() function so you can fetch them with api call
    has a pop for TestDetail where you can start quiz
*/

export default class Test extends React.Component {
    state = {
        item: [],
        show: false,
        itemToShow: {}
    }

    testClicked = () => {

        this.props.popPopup();
        this.props.popHandler();
    };

    onclick = (item) => {
        this.setState({
            itemToShow: item
        })
        this.testClicked();
    }
    componentWillMount() {
        for(let i in data.tasks){
            this.setState(prevState => ({
                item: [data.tasks[i], ...prevState.item]
            }));
        }
    }
    render() {
        let popup
        if (this.props.showPopup) {
            popup = <TestDetail item={this.state.itemToShow} click={this.onclick} close={this.testClicked} />
        }
        return (
            <div className="TestBody">
                {popup}
                <div className="TestHeader">
                    <h1>{I18n.t('testpage.header')}</h1>
                    <p>{I18n.t('testpage.headerText')}</p>
                </div>
                <div className="testList">
                    <Trail items={this.state.item} keys={item => item.id} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{  transform: 'translate3d(0, 0, 0)'}}>
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
