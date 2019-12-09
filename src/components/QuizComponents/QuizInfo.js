import React from 'react';
import './QuizInfo.css';
import { Spring } from 'react-spring/renderprops';

export default class QuizInfo extends React.Component {
    static props = {taskName: "Quiz", desc: "null", reward: "null"}

    render() {
        return(
            <Spring from={{opacity: 0}} to={{opacity: 1}} config={{ duration: 1000 }}>
                {props =>
                <div style={props}>
                    <div id="infoTitle">
                        <h1>{this.props.taskName}</h1>
                        <h2>{this.props.desc}</h2>
                    </div>
                    <div id="infoExtra">
                        <h3>Suoritus palkinto {this.props.reward} pistettä</h3>
                    </div>
                </div>}
           </Spring>
        )
    }
}
