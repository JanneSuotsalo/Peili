import React from 'react';
import './Feed.css';
import CellListView from '../../components/cellList/CellList';
import Simplelist from '../../components/list/SimpleList';
import OrgDetail from '../../pages/organizations/OrgDetail';
import TestCard from '../../components/card/TestCard';
import { Trail } from 'react-spring/renderprops'
import TestDetail from '../../pages/testDetail/TestDetail';

var data = require('../../example2.json');
var data1 = require('../../test.json');

export default class Feed extends React.Component {
    state = {
        item: [],
        quiz: []
    }
    constructor(props) {
        super(props);
    }

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

    render() {
        let item;
        let popup;

        if (this.props.orgHandler) {
            item = <OrgDetail image={this.props.image} handleUnsubscribe={this.handleUnsubscribe} data={this.props.data} />
        }
        if (this.props.showPopup) {
            popup = <TestDetail item={this.state.itemToShow} click={this.onclick} close={this.testClicked} />
        }

        return (
            <div>
                {item}
                {popup}
                <Cell title="Suositellut" recommend={true} />
                <div className="cardHeader">
                    <h2 className="sectionTitle">Kyselyt</h2>
                </div>
                <div className="mainFeed">
                    <Trail items={this.state.quiz} keys={item => item} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{ transform: 'translate3d(0, 0, 0)' }}>
                        {item => props => <TestCard style={props} clicked={this.onclick} title={item} />}
                    </Trail>
                </div>
                <Cell title="Tilatut" click={this.handleClick} recommend={false} subOrgz={this.props.subscribed} />
            </div>
        )
    };
};

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.props = { title: "null" }
    }
    onClick = (image, data) => {
        this.props.click(image, data)
    }
    render() {
        if (this.props.recommend) {
            return (
                <div class="scrolling-wrapper">
                    <div class="card"><CellListView item={data} /></div>
                </div>
            )
        }
        if (this.props.subOrgz.length > 0) {
            return (
                <div class="scrolling-wrapper">
                    <Trail items={this.props.subOrgz} keys={item => item} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{ transform: 'translate3d(0, 0, 0)' }}>
                        {item => props => <div class="card"><Simplelist style={props} click={this.onClick} item={item} /></div>}
                    </Trail>
                </div>
            )
        } else {
            return (
                <h3>Oops... this is empty</h3>
            )
        }
    };
};

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.props = { title: "null" }
    }

    handleClick = (image, data) => {
        this.props.click(image, data);
    }

    render() {

        return (
            <div>
                <div className="cardHeader">
                    <h2 className="sectionTitle">{this.props.title}</h2>
                </div>
                <Container recommend={this.props.recommend} click={this.handleClick} subOrgz={this.props.subOrgz} />
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