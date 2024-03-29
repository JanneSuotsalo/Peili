import React from 'react';
import './Opentext.css';
import { Spring } from 'react-spring/renderprops';

// Textarea question component
export default class Opentext extends React.Component {    
    static props = {maxLength: "250", qTitle: "null"}

    checkProp() {
        let placeHolder;
        if (this.props.maxLength == null) {
            placeHolder = "Vastaa vapaasti:"
            return placeHolder;
        } else {
            placeHolder = "Vastaa vapaasti: (Maksimi pituus " + this.props.maxLength + " kirjainta)"
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
                        <textarea onChange={this.handleEvent} id="textArea" placeholder={this.checkProp()} className="textBox" rows="10" maxLength={this.props.maxLength}></textarea>
                    </label>
                </div>
            </div>}
            </Spring>
        )
    }
}