import React from 'react';
import './Opentext.css';
import { Spring } from 'react-spring/renderprops';

var taskData = require('../../taskListExample.json');

// Textarea question component
export default class Opentext extends React.Component {    
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
            <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 1000 }}>
            {props =>
            <div style={props} className="openText">
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="textArea">
                    <label>
                        <textarea onChange={this.handleEvent} id="textArea" placeholder={this.checkProp()} className="textBox" rows="8" maxLength={this.props.maxLength}></textarea>
                    </label>
                </div>
            </div>}
            </Spring>
        )
    }
}