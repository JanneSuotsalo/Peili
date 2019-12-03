import React from 'react';
import './RadioGroup.css';
import { Spring } from 'react-spring/renderprops';

var taskData = require('../../taskListExample.json');


// Component for true/false type questions
export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props = {qTitle: "null", value1: "null", value2: "null"}
    }

    render() {
        return (
            <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 1000 }}>
                {props =>
                <div style={props}>
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="radioGroup">
                    <input className="radio" type="radio" name="radio" value={this.props.value1} />{this.props.value1}<br/>
                    <input className="radio" type="radio" name="radio" value={this.props.value2} />{this.props.value2}<br/>
                </div>
            </div>}
            </Spring>
        )
    }
}