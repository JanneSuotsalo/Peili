import React from 'react';
import './Quiz.css';

export default class Quiz extends React.Component {
    render() {
        return (
            <div>
                <div className="taskName">
                    <h1>Tehtävä x</h1>
                </div>
                <div className="questionCard">
                <Title question ="Tunnetko itsesi yksinäiseksi?"/>
                <MultiChoice options="5" />
                </div>
            </div>
        )
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props)
        this.props = {question: "null"}
    }

    render() {
        return <h2 className="title">{this.props.question}</h2>
    }
}

class Opentext extends React.Component {    
    constructor(props) {
    super(props)
    this.props = {rows: "7", maxLength: "200"}
    }
    
    render() {
        var placeHolder = "Vastaa vapaasti: (Maksimi pituus " + this.props.maxLength + " kirjainta)"

        return (
            <div className="textArea">
                <textarea placeholder={placeHolder} className="textBox" rows={this.props.rows} maxLength={this.props.maxLength}></textarea>
            </div>
        )
    }
}

class MultiChoice extends React.Component {    
    constructor(props) {
    super(props)
    this.props = {options: "3"}
    }

    optionCount() {
        var options = [];
        var values = ["random", "test", "dummy", "data", "and", "stuff"];
        for (var i = 0; i < this.props.options; i++) {
            options.push(<div className="checkBox">
                            <input type="checkbox" key={i} />
                            <label>{values[i]}</label>
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
        this.props = {}
    }

    render() {
        return (
            <div className="radioGroup">
                <input type="radio" name="radio" value="true" />Tosi<br/>
                <input type="radio" name="radio" value="false" />Epätosi<br/>
            </div>
        )
    }
}

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.props = {}
    }

    render() {
        return (
            <div className="rangeSlider">
                <input type="range" min="1" max="5" />
            </div>
        )
    }
}