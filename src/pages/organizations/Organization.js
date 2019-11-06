import React from 'react';
import ListView from '../../components/list/ListView';
import './Organization.css'
var data = require('../../example.json');

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
            <ListView item={data} />
            </div>
        );
    }
}
