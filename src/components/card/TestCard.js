import React from 'react';
import { Link } from "react-router-dom";


export default class TestCard extends React.Component {
    constructor(props) {
        super(props)
    }
    style() {
        return '#' + Math.random().toString(16).substr(-6);
    }
    handleClick = () => {
        this.props.clicked(this.props.title);
    }
    render() {
        let width1 = "";
        if (this.props.title % 3 == 0) {
            width1 = "90%"
        } else {
            width1 = "45%"
        }
        return (
            <div className="TestCard" style={{ backgroundImage: 'linear-gradient(' + this.style() + ',' + this.style() + ')', width: width1 }} onClick={this.handleClick}>
                <div className="TestCircle">
                    <div className="TestCircle1"></div>
                </div>
                <div className="TestInfo">
                    <h2>Testi {this.props.title}</h2>
                    <p>palkinto: {this.props.title * 100}</p>
                </div>

                <div className="TestWindow"></div>
            </div>
        );
    }
}