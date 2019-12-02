import React from 'react';
import './Quiz.css';
import { Spring, Trail } from 'react-spring/renderprops'
import { Link } from "react-router-dom";

var taskData = require('../../taskListExample.json');

export default class Quiz extends React.Component {
    render() {
        return <TestQuiz1 questions="6" />
    }
}

// This component is for testing purposes when there is no database
class TestQuiz1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {questionCount: 0, value: "", status: false, warning: ""}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({questionCount: this.state.questionCount + 1}, () => {
            console.log(this.state.questionCount)
            this.setState({warning: ""});
        });
    }

    handleBackClick = () => {
        this.setState({questionCount: this.state.questionCount - 1}, () => {
            console.log(this.state.questionCount)
            this.setState({warning: ""});
        });
    }

    // Handle forward click from <OpenText/> component, checks for input
    handleTextClick = () => {
        this.setState({value: document.querySelector("#textArea").value}, () => {
            console.log(this.state.value, this.state.value.length);
            if (this.state.value.length > 3 ) {
                //this.setState({status: true}, () => {
                    this.handleClick()
                //});
            } else {
                //this.setState({status: false}, () => {
                    this.setState({warning: "Vastaus tarvitaan jatkamiseen"});
                //});
            };
        });
    }

    // Handle forward click from <RadioGroup/> component, checks for input
    handleRadioClick = () => {
        var radioButtons = document.getElementsByName("radio");
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                this.handleClick()
            } else {
                this.setState({warning: "Vastaus tarvitaan jatkamiseen"});
            }
        }
    }

    render() {
        let questionCount = this.state.questionCount;
        let index = questionCount - 1;
        let questionLayout;

        if (questionCount == 0) {
            questionLayout =                     
            <div className="questionCard">
                <QuizInfo taskName={taskData.taskName} desc={taskData.description} reward={taskData.reward} />
                <button onClick={this.handleClick} className="start_btn">Aloita</button>
            </div>

        } else if (questionCount == 1) {
            questionLayout =                     
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RadioGroup qTitle={taskData.questions[index].prompt} value1={taskData.questions[index].ansType[0]} value2={taskData.questions[index].ansType[1]} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleRadioClick} className="next_btn">Seuraava</button>
                        <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                        </Link>
                </div>
            </div>

        } else if (questionCount == 2) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RangeSlider qTitle={taskData.questions[index].prompt}min={taskData.questions[index].minValue} max={taskData.questions[index].maxValue} minLabel={taskData.questions[index].minLabel} maxLabel={taskData.questions[index].maxLabel} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                            <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 3) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <Opentext qTitle={taskData.questions[index].prompt} maxLength={taskData.questions[index].maxLen} />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleTextClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 4) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <MultiChoice qTitle={taskData.questions[index].prompt} options={taskData.questions[index].choices}  />
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 5) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RadioGroup qTitle={taskData.questions[index].prompt} value1="Tosi" value2="Epätosi" />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleRadioClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>

        } else if (questionCount == 6) {
            questionLayout =
            <div className="questionCard">
                <div className="progressDiv">
                    <h3 className="progress">Kysymys {questionCount}/6</h3>
                    <h4 className="progress">{taskData.introText}...</h4>
                </div>
                <RadioGroup qTitle={taskData.questions[index].prompt} value1="Tosi" value2="Epätosi" />
                <h3 className="warning">{this.state.warning}</h3>
                <div className="quizButtons">
                    <button onClick={this.handleBackClick} className="back_btn">Takaisin</button>
                    <button onClick={this.handleRadioClick} className="next_btn">Seuraava</button>
                    <Link to="/test">
                        <button className="abort_btn">Poistu</button>
                    </Link>
                </div>
            </div>
        } // Should go to completion page after

        return(
            <div>
                {questionLayout}
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
                <div id="infoTitle">
                    <h1>{this.props.taskName}</h1>
                    <h2>{this.props.desc}</h2>
                </div>
                <div id="infoExtra">
                    <h3>Suoritus palkinto {this.props.reward} pistettä</h3>
                </div>
            </div>
        )
    }
}

// Textarea question component
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
                        <textarea onChange={this.handleEvent} id="textArea" placeholder={this.checkProp()} className="textBox" rows="8" maxLength={this.props.maxLength}></textarea>
                    </label>
                </div>
            </div>
        )
    }
}

// Multiple choice question component
class MultiChoice extends React.Component {    
    constructor(props) {
        super(props)
        this.props = {options: "3", qTitle: "null"}
    }

    optionCount() {
        var options = [];
        var values = ["Iloiseksi", "Rohkeaksi", "Vihaiseksi", "Tunteikkaaksi", "and", "stuff"];
        for (var i = 0; i < this.props.options; i++) {
            var id = "cb" + i
            //console.log(id);
            options.push(<div className="checkBoxDiv">
                            <input id={id} type='checkbox' />
                            <label for={id}>
                                <span></span>
                                {values[i]}
                            </label>
                        </div>
                        )
        }
        return options;
    }

    render() {
        return (
            <div className="multiChoice">
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                {this.optionCount()}
            </div>
        )
    }
}

// Component for true/false type questions
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

// Range slider component for choosing value from range
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
        //console.log("range change");
        const value = document.querySelector('.rangeSlider').value;
        document.querySelector('#rangeValue').innerHTML = value;
        //console.log(document.querySelector('#rangeValue').innerHTML)
        console.log(value)
    }

    render() {
        return (
            <div>
                <div className="qTitle">
                    <h2>{this.props.qTitle} ({this.props.min} - {this.props.max})</h2>
                </div>
                <div className="rangeDiv">
                    <h1 id="rangeValue">{this.props.min}</h1>
                </div>
                <div className="rangeSliderDiv">
                    <input className="rangeSlider" onInput={this.rangeValue} name="range" type="range" min={this.props.min} max={this.props.max} step="1"/>
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