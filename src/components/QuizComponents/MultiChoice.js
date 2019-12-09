import React from 'react';
import './MultiChoice.css';
import { Spring } from 'react-spring/renderprops';

// Multiple choice question component
export default class MultiChoice extends React.Component {    

    static props = {options: "3", qTitle: "null"}

    optionCount() {
        var options = [];
        var values = ["Iloiseksi", "Rohkeaksi", "Vihaiseksi", "Tunteikkaaksi", "and", "stuff"];
        for (var i = 0; i < this.props.options; i++) {
            var id = "cb" + i
            //console.log(id);
            options.push(<div key={id + i} className="checkBoxDiv">
                            <input id={id} type='checkbox' />
                            <label htmlFor={id}>
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
            <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 1000 }}>
                {props =>
            <div style={props} className="multiChoice">
                <div className="qTitle">
                    <h2>{this.props.qTitle}</h2>
                </div>
                {this.optionCount()}
            </div>}
            </Spring>
        )
    }
}