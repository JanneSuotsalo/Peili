import React from 'react';
import './Simplelist.css'
import I18n from '../Element/LanguageSwticher/I18n';
import { FaWalking, FaInfo, FaMap } from 'react-icons/fa';
import { Spring } from 'react-spring/renderprops'


export default class Simplelist extends React.Component {
    state = {
        image: ""
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        fetch(`https://source.unsplash.com/random/800x600/?house?sig=` + this.props.index).then((response) => {
            this.setState({
                image: response.url
            })
        })
    }
    click = () => {
        this.props.click(this.state.image);
    }

    render() {
        return (
            <div style={this.props.style} className="SimplelistCard" onClick={this.click}>
                <img src={this.state.image}></img>
                <div className="SimplelistHeader">
                    <h4>{this.props.item.name.fi}</h4>
                </div>
                <div className="SimplelistBody">
                    <p>{this.randomMeter()} metriä</p>
                    <div className="SimpleListSpacer"></div>
                </div>
                <button>Näytä lisää</button>
            </div>

        );
    }
    randomMeter = () => {
        return Math.floor(Math.random() * 999);
    }
}
