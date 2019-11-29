import React from 'react';
import { Link } from "react-router-dom";
import './TestCard.css';
import { Spring } from 'react-spring/renderprops';


export default class TestCard extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = () => {
        this.props.clicked(this.props.title);
    }
    render() {
        let anim = this.props.style
        let style
        style = {}

        return (
            <div className="TestCard" style={{ ...anim, width: "80%" }} onClick={this.handleClick}>
                <div className="TestInfo">
                    <h2>Testi {this.props.title}</h2>
                    <p>palkinto: {this.props.title * 100}</p>
                </div>
            </div>
        );
    }

}
