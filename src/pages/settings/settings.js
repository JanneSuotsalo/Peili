import React from 'react';
import './settings.css';

export default class Settings extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="pageTitle">
                    <h1>Settings</h1>                
                </div>
                <div id="settingsList">
                    <ListSliderItem title="Dark Theme" />
                    <ListItem title="Login Credentials" />
                    <ListItem title="Feed Settings" />
                </div>
            </div>
        )

    };
};

class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.props = {title: "settings"}
    }

    // Opens on 2 clicks, need to fix.
    handleClick() {
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        };
    };

    render() {
        return (
            <div id="itemContainer">
                <h3 id="itemTitle">{this.props.title}</h3>
                <Collapsible onClick={this.handleClick} />
            </div>
        )
    }
}

class ListSliderItem extends React.Component {
    constructor(props) {
        super(props)
        this.props = {title: "settings"}
    }

    render() {
        return (
            <div id="itemContainer">
                <h3 id="itemTitle">{this.props.title}</h3>
                <Slider />
            </div>
        )
    }
}

class Collapsible extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick} type="button" class="collapsible">﹀</button>
                <div class="content">
                    <p>Inputs and stuff</p>
                    <label>Change username:</label>
                    <br/>
                    <input type="text" placeholder="New username" />
                </div>
            </div>
        )
    }
}

class Slider extends React.Component {

    
    render() {
        return(
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        )
    }
}