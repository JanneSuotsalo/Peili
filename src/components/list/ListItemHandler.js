import React from 'react';
import Simplelist from './SimpleList';
import ListView from './ListView';

export default class ListItemHandler extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = (image) => {
        this.props.click(image)
    }

    render() {
        return (
            <div>
               <Simplelist style={this.props.style} item={this.props.item} index={this.props.index} click={this.onClick} />
            </div>
        );
}
}
// {this.props.index % 4 == 0 ? (<ListView style={this.props.style} item={this.props.item} click={this.handleClick} />) : (<Simplelist style={this.props.style} item={this.props.item} click={this.handleClick} />) }
          