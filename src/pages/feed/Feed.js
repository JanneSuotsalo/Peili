import React from 'react';
import './Feed.css';
import CellListView from '../../components/cellList/CellList';

var data = require('../../example2.json');

export default class Feed extends React.Component {
    render() {
        return (
            <div>
                <Cell />
                <Cell />
                <Cell />
            </div>
        )
    };
};

class Container extends React.Component {
    render() {
        return (
            <div class="scrolling-wrapper">
                <div class="card"><CellListView item={data} /></div>
                <div class="card"><CellListView item={data} /></div>
                <div class="card"><CellListView item={data} /></div>
                <div class="card"><CellListView item={data} /></div>
            </div>
        )
    };
};

class Cell extends React.Component {
    render() {
        return (
            <div>
                <h2 className="cellTitle">{data.name.fi}</h2>
                <Container />
            </div>
        )
    };
};