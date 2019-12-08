import React from 'react';
import './RadioGroup.css';
import { Spring } from 'react-spring/renderprops';

// Component for true/false type questions
export default class RadioGroup extends React.Component {
    static props = {qTitle: "null", value1: "null", value2: "null"}

    render() {
        return (
            <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 1000 }}>
                {props =>
                <div style={props}>
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                <div className="radioGroup">
                    <ul>
                        <li>
                            <input type="radio" name="radio" id={"radio" + this.props.value1} value={this.props.value1} />
                            <label htmlFor={"radio" + this.props.value1}>{this.props.value1}</label>
                            <div className="check"></div>
                        </li>
                        <li>
                            <input type="radio" name="radio" id={"radio" + this.props.value2} value={this.props.value2} />
                            <label htmlFor={"radio" + this.props.value2}>{this.props.value2}</label>
                            <div className="check"></div>
                        </li>
                    </ul>
                </div>
            </div>}
            </Spring>
        )
    }
}