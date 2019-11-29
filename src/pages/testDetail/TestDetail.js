import React from 'react';
import { Link } from "react-router-dom";
import "./TestDetail.css";


export default class TestCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="detailPopup">
                <div className="detailHeader">
                    <h1>Testi</h1>
                    <p>Tähän tulee testin kuvaus</p>
                </div>
                <Link to="/quiz">
                    <div onClick={this.props.click} className="buttoni">
                        Aloita testi
                     </div>
                     </Link>
            </div>
        );
    }
}