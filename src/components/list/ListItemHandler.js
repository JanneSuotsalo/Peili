import React from 'react';
import Simplelist from './SimpleList';
import ListView from './ListView';

export default class ListItemHandler extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.index % 4 == 0 ? (<ListView style={this.props.style} item={this.props.item} click={this.handleClick} />) : (<Simplelist style={this.props.style} item={this.props.item} click={this.handleClick} />) }
            </div>
        );
}
}
