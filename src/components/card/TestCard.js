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
        let color
        if(this.props.title.status == "NEW"){
            color = "linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 1),rgba(0, 230, 64, 1))"; 
        } else if (this.props.title.status == "PAUSED"){
            color = "linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 1),rgba(248, 148, 6, 1))"; 
        } else if (this.props.title.status == "COMPLETED"){
            color = "linear-gradient(to right, rgba(255, 255, 255, 1),rgba(255, 255, 255, 1),rgba(240, 52, 52, 1))"; 
        }

        let style
        style = {}
        return (
            <div className="TestCard" style={{ ...anim, width: "80%" , background: color}} onClick={this.handleClick}>
                <div className="TestInfo">
                    <h2>{this.props.title.header}</h2>
                    <p>palkinto: {this.props.title.reward * 100}</p>
                    <button>Näytä lisää</button>
                </div>
            </div>
        );
    }

}
