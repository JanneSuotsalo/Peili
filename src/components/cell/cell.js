import React from 'react';
import Container from '../container/container'

export default class Cell extends React.Component {

    handleClick = (image, data) => {
        this.props.click(image, data);
    }

    render() {

        return (
            <div>
                <div className="cardHeader">
                    <h2 className="sectionTitle">{this.props.title}</h2>
                </div>
                <Container recommend={this.props.recommend} click={this.handleClick} subOrgz={this.props.subOrgz} />
            </div>
        )
    };
};