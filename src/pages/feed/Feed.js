import React from 'react';
import './Feed.css';
import CellListView from '../../components/cellList/CellList';
import CustomChatbot from "../chatbot/CustomChatbot";


var data = require('../../example2.json');
var taskData = require('../../taskListExample.json');
var taskData2 = require('../../taskListExample2.json');

export default class Feed extends React.Component {
    render() {
        return (
            <div>
                <Cell title="Suositellut" />
                <Tasks />
                <Cell title="Kohtaus" />
            </div>
        )
    };
};

class Container extends React.Component {
    render() {
        return (
            <div class="scrolling-wrapper">
                <div class="card"><CellListView item={data} /></div>
                <div class="card"><CellListView item={data} /></div>
                <div class="card"><CellListView item={data} /></div>
                <div class="card"><CellListView item={data} /></div>
            </div>
        )
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
                <Container />
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
                           <CustomChatbot />

            </div>
        )
    }
}