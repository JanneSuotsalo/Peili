import React from 'react';
import './RangeSlider.css';
import { Spring } from 'react-spring/renderprops';

var taskData = require('../../taskListExample.json');


// Range slider component for choosing value from range
export default class RangeSlider extends React.Component {
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
            <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 1000 }}>
                {props =>
                <div style={props}>
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
            </div>}
            </Spring>
        )
    }
}