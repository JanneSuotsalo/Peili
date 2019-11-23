import React from 'react';
import './List.css'
import I18n from '../../components/Element/LanguageSwticher/I18n';
import { FaWalking, FaInfo, FaMap } from 'react-icons/fa';
import { Spring } from 'react-spring/renderprops'


export default class ListView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Spring
                from={{ transform: 'translate3d(-600px, 0, 0)' }}
                to={{ transform: 'translate3d(0, 0, 0)' }}
                config={{ duration: 200 }}>
                {props =>
                    <div style={props} className="listCard" onClick={this.props.click}>
                        <img src={this.props.item.image}></img>
                        <div className="listHeader">
                            <h2 id="head">{this.props.item.name.fi}</h2>
                            <p>{this.props.item.description.body}</p>
                            <p id="open">8.00-16.00</p>

                        </div>
                    </div>
                }
            </Spring>
        );
    }
}
