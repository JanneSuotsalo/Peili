import React from 'react';
import ListView from '../../components/list/ListView';
import './Organization.css'
import Simplelist from '../../components/list/SimpleList';
var data = require('../../example2.json');

export default class Organization extends React.Component {
    state = {
        loading: true
    }

    render() {
        //now only one item but will be changed to a list
        return (
            <div>
            <div className="orgName">
            <h1>Järjestöt</h1>
            <p>Tästä löydät Applikaation kaikki Järjestöt</p>
            </div>
            <ListView item={data} />
            <Simplelist item={data}/>
            <Simplelist item={data}/>
            <Simplelist item={data}/>
            <ListView item={data} />
            <Simplelist item={data}/>
            <Simplelist item={data}/>
            <Simplelist item={data}/>
            
            </div>
        );
    }
}
