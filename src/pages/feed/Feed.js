import React from 'react';
import './Feed.css';
import Cell from '../../components/cell/cell';
import OrgDetail from '../../pages/organizations/OrgDetail';
import TestCard from '../../components/card/TestCard';
import { Trail } from 'react-spring/renderprops'
import TestDetail from '../../pages/testDetail/TestDetail';

var data1 = require('../../test.json');
var data = require('../../example.json');

export default class Feed extends React.Component {
    state = {
        showCase: [],
        item: [],
        quiz: []
    }
    constructor(props) {
        super(props);
        /*this.data = props.data;
        this.handleSubscribe = props.handleSubscribe;
        this.handleUnsubscribe = props.handleUnsubscribe;
        this.image = props.image;
        this.orgHandler = props.orgHandler;
        this.orgHandler1 = props.orgHandler1;
        this.popHandler = props.popHandler;
        this.popOrgDetail = props.popOrgDetail;
        this.popPopup = props.popPopup;
        this.showPopup = props.showPopup;
        this.subscribed = props.subscribed;
    */}

    handleClick = (image, data) => {
        this.props.orgHandler1(image, data);
    }

    componentWillMount() {
        for (var i = 0; i < 1; i++) {
            this.setState(prevState => ({
                quiz: [data1.tasks[i], ...prevState.quiz]
            }));
        }
    }

    onclick = (item) => {
        this.setState({
            itemToShow: item
        })
        this.testClicked();
    }
    testClicked = () => {
        this.props.popPopup();
        this.props.popHandler();
    };

    handleUnsubscribe = (item) => {
        this.props.handleUnsubscribe(item)
        this.props.popOrgDetail();
    }
    handleSubscribe = (item) => {
        this.props.handleSubscribe(item)
    }

    render() {
        let item;
        let popup;

        if (this.props.orgHandler) {
            if (!this.props.subscribed.some(subItems => subItems.id === this.props.data.id)) {
                item =
                    <OrgDetail
                        image={this.props.image}
                        handleSubscribe={this.handleSubscribe}
                        handleUnsubscribe={this.handleUnsubscribe}
                        subscribed={true}
                        data={this.props.data} />
            } else {
                item =
                    <OrgDetail
                        image={this.props.image}
                        handleSubscribe={this.handleSubscribe}
                        handleUnsubscribe={this.handleUnsubscribe}
                        subscribed={false}
                        data={this.props.data} />
            }
        }
        if (this.props.showPopup) {
            popup = <TestDetail item={this.state.itemToShow} click={this.onclick} close={this.testClicked} />
        }

        return (
            <div>
                {item}
                {popup}
                <Cell title="Suositellut" recommend={true} subOrgz={this.props.subscribed} click={this.handleClick} />
                <div className="cardHeader">
                    <h2 className="sectionTitle">Kyselyt</h2>
                </div>
                <div className="mainFeed">
                    <Trail items={this.state.quiz} keys={item => item.id} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{ transform: 'translate3d(0, 0, 0)' }}>
                        {item => props => <TestCard style={props} feed={true} clicked={this.onclick} title={item} />}
                    </Trail>
                </div>
                <Cell title="Tilatut" click={this.handleClick} recommend={false} subOrgz={this.props.subscribed} />
            </div>
        )
    };
};
/*
class Tasks extends React.Component {
    constructor (props) {
        super(props);
        this.listTasks = this.listTasks.bind(this);
    }

    listTasks() {
        var lTask = [];
        var task = Element;
        var task2 = Element;
        //for (var i = 0; i < taskData.lenght; i++) {
            //var obj = taskData[i];
            //console.log(obj);

            task = ( <div className="taskItem">
                <div className="taskInner">
                    <h2 className="taskText">{taskData.taskName}</h2>
                    <h4 className="taskText"> Palkinto: {taskData.reward}</h4>
                </div>
            </div>)
            lTask.push(task)
            return lTask;

            // Temporary examplefile #2


            //lTask.push(task);
            //}
        //return lTask
    }

    listTasks2() {
        var lTask = [];
        var task2 = Element;

            task2 = ( <div className="taskItem">
                <div className="taskInner">
                    <h2 className="taskText">{taskData2.taskName}</h2>
                    <h4 className="taskText"> Palkinto: {taskData2.reward}</h4>
                </div>
            </div>)
            lTask.push(task2)
            return lTask;
    }

    render () {
        return (
            <div className="taskList">
                <div className="taskHeader">
                    <h2 className="sectionTitle">Kyselyt</h2>
                </div>
                {this.listTasks()}
                {this.listTasks2()}
            </div>
        )
    }
}*/