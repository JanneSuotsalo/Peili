import React from 'react';
import './Quiz.css';
import { pipelineTopicExpression } from '@babel/types';
import { Link } from "react-router-dom";
import Result from '../result/Result';

var taskData = require('../../taskListExample.json');
var taskData2 = require('../../taskListExample2.json');

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <TestQuiz1 questionNumber={this.props.questionNumber} questions="6" />
    }
}

class TestQuiz1 extends React.Component {
    state = {
        sex: ""
    }
    constructor(props) {
        super(props)
        this.props = {questions: "null"}
        }
/*
    optionCount() {
        var number = [];

        var questions = [
            <RadioGroup qTitle={taskData.questions[0].prompt} value1={taskData.questions[0].ansType[0]} value2={taskData.questions[0].ansType[1]} />,
            <RangeSlider qTitle={taskData.questions[1].prompt} min={taskData.questions[1].minValue} max={taskData.questions[1].maxValue} minLabel={taskData.questions[1].minLabel} maxLabel={taskData.questions[1].maxLabel} />,
            <Opentext qTitle={taskData.questions[2].prompt} maxLength={taskData.questions[2].maxLen} />,
            <RangeSlider qTitle={taskData.questions[3].prompt} min={taskData.questions[3].minValue} max={taskData.questions[3].maxValue} minLabel={taskData.questions[3].minLabel} maxLabel={taskData.questions[3].maxLabel} />,
            <RadioGroup qTitle={taskData.questions[4].prompt} value1="Tosi" value2="Epätosi" />,
            <RadioGroup qTitle={taskData.questions[5].prompt} value1="Tosi" value2="Epätosi" />
            ];

        for (var i = 0; i < this.props.questions; i++) {
            number.push(
                    <div className="questionCard">
                        {questions[i]}
                    </div>
            )
        }
        return number;
    }*/
    changeQuestion = () => {
        console.log("changeQuestion")
    }

    render() {
                
        let questionLayout1;
        console.log(this.props.questionNumber)

        if(this.props.questionNumber == 1) {
            questionLayout1 = <RadioGroup subscribe={this.changeQuestion} qTitle={taskData.questions[0].prompt} value1={taskData.questions[0].ansType[0]} value2={taskData.questions[0].ansType[1]} />;
        } else if(this.props.questionNumber == 2) {
            questionLayout1 = <RadioGroup qTitle={taskData.questions[0].prompt} value1={taskData.questions[0].ansType[0]} value2={taskData.questions[0].ansType[1]} />;
        } else if(this.props.questionNumber == 3){
            questionLayout1 = <Result />
        }

        return(
            
            <div>
                <div className="taskName">
                    <h1>{taskData.taskName}</h1>
                </div>
                {questionLayout1}
                <div className="quizFooter">
                    <button id="nextButton">Seuraava</button>
                </div>
            </div>
        )
    }
}

class QuizInfo extends React.Component {
    constructor(props) {
        super(props)
        this.props = {taskName: "Quiz", desc: "null", intro: "null", reward: "null"}
        }

    render() {
        return(
            <div>
                <div>
                    <h1>{this.props.taskName}</h1>
                    <h2>{this.props.desc}</h2>
                </div>
                <div>
                    <h3>{this.props.intro}</h3>
                    <h3>{this.props.reward} points</h3>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        )
    }
}

class Opentext extends React.Component {    
    constructor(props) {
    super(props)
    this.props = {maxLength: "250", qTitle: "null"}
    }

    checkProp() {
        if (this.props.maxLength == null) {
            var placeHolder = "Vastaa vapaasti:"
            return placeHolder;
        } else {
            var placeHolder = "Vastaa vapaasti: (Maksimi pituus " + this.props.maxLength + " kirjainta)"
            return placeHolder;
        }
    };
    
    render() {
        return (
            <div className="openText">
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="textArea">
                    <label>
                        <textarea placeholder={this.checkProp()} className="textBox" rows="12" maxLength={this.props.maxLength}></textarea>
                    </label>
                </div>
            </div>
        )
    }
}

class MultiChoice extends React.Component {    
    constructor(props) {
    super(props)
    this.props = {options: "3", qTitle: "null"}
    }

    optionCount() {
        var options = [];
        var values = ["random", "test", "dummy", "data", "and", "stuff"];
        for (var i = 0; i < this.props.options; i++) {
            var id = "cb" + i
            console.log(id);
            options.push(<div className="checkBoxDiv">
                            <input id={id} type='checkbox' />
                            <label for={id}>
                                <span></span>
                                {values[i]}
                                <ins><i>{values[i]}</i></ins>
                            </label>
                        </div>
                        )
        }
        return options;
    }

    render() {
        return (
            <div className="multiChoice">
                {this.optionCount()}
            </div>
        )
    }
}

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props = {qTitle: "null", value1: "null", value2: "null"}
    }

    render() {
        return (            
            <div>
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="radioGroup">
                    <input className="radio" type="radio" name="radio" value={this.props.value1} />{this.props.value1}<br/>
                    <input className="radio" type="radio" name="radio" value={this.props.value2} />{this.props.value2}<br/>
                </div>
            </div>
        )
    }
}

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.props = {qTitle: "null", min: "1", max: "5", minLabel: "null", maxLabel: "null"};

        this.handleChange = this.handleChange.bind(this);
        this.rangeValue = this.rangeValue.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    rangeValue() {
        console.log("range change");
        const value = document.querySelector('#rangeSlider').value;
        //document.querySelector('#rangeValue').innerHTML = value;
        console.log(document.querySelector('#rangeValue').innerHTML)
        console.log(value)
    }

    render() {
        return (
            <div>
                <div className="qTitle">
                    <h2>{this.props.qTitle} ({this.props.min} - {this.props.max})</h2>
                </div>
                    <p id="rangeValue">he</p>
                <div className="rangeSlider">
                    <input id="rangeSlider" onInput={this.rangeValue} name="range" type="range" min={this.props.min} max={this.props.max} step="1"/>
                    <div className="numberLabel">
                        <label className="valueLabel min" >{this.props.min}</label>
                        <label className="valueLabel max" >{this.props.max}</label>
                    </div>
                </div>
                <div className="infoLabel">
                    <label className="txtLabel min">{this.props.minLabel}</label>
                    <label className="txtLabel max">{this.props.maxLabel}</label>
                </div>
            </div>
        )
    }
}