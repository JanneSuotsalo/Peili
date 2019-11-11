import React from 'react';

export default class TestCard extends React.Component {
    constructor(props){
        super(props)
    }
    style(){
        return '#'+Math.random().toString(16).substr(-6); 
    }
    handleClick = () => {
        this.props.clicked(this.props.title);
    }
    render() {
        let width1 = "";
        if(this.props.title % 3 == 0){
            console.log("here")
            width1 = "90%"
        } else {
            width1 = "45%"
        }
        return (
            <div className="TestCard" style={{backgroundImage: 'linear-gradient(' +this.style() +',' +this.style()+')',width:width1}} onClick={this.handleClick}>
                <div className="TestCircle"></div>                            
                <h2>Testi {this.props.title}</h2> 
                <div className="TestWindow"></div>            
            </div>
        );
    }
}