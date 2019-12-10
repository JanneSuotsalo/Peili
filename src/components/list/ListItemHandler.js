import React from 'react';
import Simplelist from './SimpleList';
/*
At first was going to be used as a platform to distripute different kind of layout cards.
After user testing it was unnecessery but still in use
*/
export default class ListItemHandler extends React.Component {
    onClick = (image, data) => {
        this.props.click(image, data)
    }

    render() {
        return (
            <div>
               <Simplelist style={this.props.style} item={this.props.item} index={this.props.index} subscribed={this.props.subscribed} click={this.onClick} />
            </div>
        );
}
}
// {this.props.index % 4 == 0 ? (<ListView style={this.props.style} item={this.props.item} click={this.handleClick} />) : (<Simplelist style={this.props.style} item={this.props.item} click={this.handleClick} />) }
          