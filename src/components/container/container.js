import React from 'react';
import Simplelist from '../../components/list/SimpleList';
import { Trail } from 'react-spring/renderprops'
var data = require('../../example.json');


export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.props = { title: "null" }
    }
    onClick = (image, data) => {
        this.props.click(image, data)
    }
    render() {
        if (this.props.recommend) {

            return (
                <div className="scrolling-wrapper">
                    <div className="card"><Simplelist click={this.onClick} item={data.organizations[data.organizations.length - 1]} /></div>
                </div>
            )
        }
        if (this.props.subOrgz.length > 0) {
            return (
                <div className="scrolling-wrapper">
                    <Trail items={this.props.subOrgz} keys={item => item} from={{ transform: 'translate3d(-400px,-400px,0)' }} to={{ transform: 'translate3d(0, 0, 0)' }}>
                        {item => props => <div className="card"><Simplelist style={props} click={this.onClick} item={item} /></div>}
                    </Trail>
                </div>
            )
        } else {
            return (
                <div className="EmptyCard">
                    <h3>Hups...</h3>
                    <h3> Kokeile tilata järjestösivulta mieleisesi järjestö</h3>
                </div>
            )
        }
    };
};