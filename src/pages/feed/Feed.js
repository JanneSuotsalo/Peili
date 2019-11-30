import React from 'react';
import './Feed.css';
import CellListView from '../../components/cellList/CellList';
import Simplelist from '../../components/list/SimpleList';

var data = require('../../example2.json');
var taskData = require('../../taskListExample.json');
var taskData2 = require('../../taskListExample2.json');

export default class Feed extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Cell title="Suositellut" recommend={true}/>
                <Tasks />
                <Cell title="Tilatut" recommend={false} subOrgz={this.props.subscribed}/>
            </div>
        )
    };
};

class Container extends React.Component {
    constructor (props) {
        super(props);
        this.props = {title: "null"}
    }
    render() {
        if(this.props.recommend){
            return (
                <div class="scrolling-wrapper">
                    <div class="card"><CellListView item={data}/></div>
                </div>
            )
        }
        if(this.props.subOrgz.length > 0){
            return (
                <div class="scrolling-wrapper">
                    <div class="card"><Simplelist item={this.props.subOrgz[0]}/></div>
                </div>
            )
        } else {
           return(  
            <h3>Oops... this is empty</h3>
           )
        }
    };
};

class Cell extends React.Component {
    constructor (props) {
        super(props);
        this.props = {title: "null"}
    }

    render() {

        return (
            <div>
                <div className="cardHeader">
                    <h2 className="sectionTitle">{this.props.title}</h2>
                </div>
                <Container recommend={this.props.recommend} subOrgz={this.props.subOrgz}/>
            </div>
        )
    };
};

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
}