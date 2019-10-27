import React from 'react';
import ListView from '../../components/list/ListView';
var data = require('../../example.json');

export default class Organization extends React.Component {
    state = {
        loading: true
    }

    render() {
        //now only one item but will be changed to a list
        return (
            <div>
            <ListView item={data} />
            </div>
        );
    }
}
