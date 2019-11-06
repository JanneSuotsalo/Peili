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
        return (
            <div className="TestCard" onClick={this.handleClick}>
                <div className="imageHolder" style={{backgroundColor:this.style(), height:"50px"}}></div>                
                <h2>Testi {this.props.title}</h2> 
            </div>
        );
    }
}