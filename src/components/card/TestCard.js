import React from 'react';

export default class TestCard extends React.Component {
    constructor(props){
        super(props)
    }
    style(){
        return '#'+Math.random().toString(16).substr(-6); 
    }
    render() {
        //now only one item but will be changed to a list
        return (
            <div className="TestCard">
                <div className="imageHolder" style={{backgroundColor:this.style(), height:"50px"}}></div>                
                <h2>Testi {this.props.title}</h2> 
            </div>
        );
    }
}