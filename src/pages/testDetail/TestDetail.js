import React from 'react';
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
                <div className="detailBody">
                    <div 
                    class="button_cont" 
                    align="center"><a 
                    class="example_c">Aloita!</a></div>
                </div>
            </div>

        );
    }
}