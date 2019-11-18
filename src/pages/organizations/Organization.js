import React from 'react';
import ListView from '../../components/list/ListView';
import './Organization.css'
import Simplelist from '../../components/list/SimpleList';
import OrgDetail from './OrgDetail';
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
        if(this.props.orgHandler){
            item = <OrgDetail item={data}/>
        }

        return (
            <div>
                {item}
            <div className="orgName">
            <h1>Järjestöt</h1>
            <p>Tästä löydät Applikaation kaikki Järjestöt</p>
            </div>
            <ListView item={data} click={this.handleClick}/>
            <Simplelist item={data} click={this.handleClick}/>
            <Simplelist item={data} click={this.handleClick}/>
            <Simplelist item={data} click={this.handleClick}/>
            <ListView item={data} click={this.handleClick}/>
            <Simplelist item={data} click={this.handleClick}/>
            <Simplelist item={data} click={this.handleClick}/>
            <Simplelist item={data} click={this.handleClick}/>
            
            </div>
        );
    }
}
