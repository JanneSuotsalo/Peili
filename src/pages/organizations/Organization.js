import React from 'react';
import ListView from '../../components/list/ListView';
import './Organization.css'
import Simplelist from '../../components/list/SimpleList';
import OrgDetail from './OrgDetail';
import { Spring } from 'react-spring/renderprops'

var data = require('../../example2.json');

export default class Organization extends React.Component {
    state = {
        loading: true
    }


    handleClick = () => {
        this.props.orgHandler1();
    }

    render() {
        let item;
        //now only one item but will be changed to a list
        if (this.props.orgHandler) {
            item = <OrgDetail item={data} />
        }

        return (
            <Spring
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{ duration: 2000 }}>
                {props =>
                    <div>
                        {item}
                        <div className="orgName">
                            <h1 style={props}>Organisaatio</h1>
                            <p style={props}>Tästä löydät Applikaation kaikki Järjestöt</p>
                        </div>

                        <ListView item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <ListView item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                    </div>
                }
            </Spring>

        );
    }
}
