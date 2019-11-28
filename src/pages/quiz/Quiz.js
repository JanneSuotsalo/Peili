import React from 'react';
import './Quiz.css';
import { Spring, Trail } from 'react-spring/renderprops'

var taskData = require('../../taskListExample.json');
var taskData2 = require('../../taskListExample2.json');

export default class Quiz extends React.Component {
    render() {
        return <TestQuiz1 questions="6" />
    }
}

class TestQuiz1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {questionCount: 0}
        this.handleClick = this.handleClick.bind(this);
        }

        handleClick = () => {
            this.setState({questionCount: this.state.questionCount + 1}, () => {
                console.log(this.state.questionCount)
            });
        }

    render() {
        
        //LAITA QUESTIONCOUNT STATEE JA lISÄÄ AINA NOIHIN COMPONENTTEIHIN
        let questionCount = this.state.questionCount;
        let index = questionCount - 1;
        let questionLayout;

        //Tsekkaa aina mikä question countti ja laittaa sen mukaan kyssärin
        if (questionCount == 0) {
            questionLayout =                     
            <div className="questionCard">
                <QuizInfo taskName={taskData.taskName} desc={taskData.description} intro={taskData.introText} reward={taskData.reward} />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>    
            </div>

        } else if(questionCount == 1) {
            questionLayout =                     
            <div className="questionCard">
                <RadioGroup qTitle={taskData.questions[index].prompt} value1={taskData.questions[index].ansType[0]} value2={taskData.questions[index].ansType[1]} />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 2) {
            questionLayout =
            <div className="questionCard">
                <RangeSlider qTitle={taskData.questions[index].prompt}min={taskData.questions[index].minValue} max={taskData.questions[index].maxValue} minLabel={taskData.questions[index].minLabel} maxLabel={taskData.questions[index].maxLabel} />
                    <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 3) {
            questionLayout =
            <div className="questionCard">
                <Opentext qTitle={taskData.questions[index].prompt} maxLength={taskData.questions[index].maxLen} />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 4) {
            questionLayout =
            <div className="questionCard">
                <MultiChoice qTitle={taskData.questions[index].prompt} options={taskData.questions[index].choices}  />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 5) {
            questionLayout =
            <div className="questionCard">
                <RadioGroup qTitle={taskData.questions[index].prompt} value1="Tosi" value2="Epätosi" />,
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 6) {
            questionLayout =
            <div className="questionCard">
                <RadioGroup qTitle={taskData.questions[index].prompt} value1="Tosi" value2="Epätosi" />
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>
        } // Should go to completion page after

        return(
            <div>
                {questionLayout}
            </div>
        )
    }
}

class TestQuiz12 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {questionCount: 0}
        this.handleClick = this.handleClick.bind(this);
        }

        handleClick = () => {
            this.setState({questionCount: this.state.questionCount + 1}, () => {
                console.log(this.state.questionCount)
            });
        }

    render() {
        
        //LAITA QUESTIONCOUNT STATEE JA lISÄÄ AINA NOIHIN COMPONENTTEIHIN
        let questionCount = this.state.questionCount;
        let index = questionCount - 1;
        let questionLayout;

        //Tsekkaa aina mikä question countti ja laittaa sen mukaan kyssärin
        if (questionCount == 0) {
            questionLayout =                     
            <div className="questionCard">
               <button onClick={this.handleClick} className="next_btn">Seuraava</button>    
            </div>

        } else if(questionCount == 1) {
            questionLayout =                     
            <div className="questionCard">
               <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 2) {
            questionLayout =
            <div className="questionCard">
                <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 3) {
            questionLayout =
            <div className="questionCard">
               <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 4) {
            questionLayout =
            <div className="questionCard">
               <button onClick={this.handleClick} className="next_btn">Seuraava</button>
            </div>

        } else if(questionCount == 5) {
            questionLayout =
            <div className="questionCard">
               <button onClick={this.handleClick} className="next_btn">Seuraava</button>
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
                    <h3>{this.props.intro}</h3>
                    <h3>Suoritus palkinto {this.props.reward} pistettä</h3>
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
                        <textarea placeholder={this.checkProp()} className="textBox" rows="8" maxLength={this.props.maxLength}></textarea>
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
        var values = ["Iloiseksi", "Rohkeaksi", "Vihaiseksi", "Tunteikkaaksi", "and", "stuff"];
        for (var i = 0; i < this.props.options; i++) {
            var id = "cb" + i
            console.log(id);
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
        const value = document.querySelector('.rangeSlider').value;
        document.querySelector('#rangeValue').innerHTML = value;
        console.log(document.querySelector('#rangeValue').innerHTML)
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