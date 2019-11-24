import React from 'react';
import { Spring, Donut } from 'react-spring/renderprops'

import './GasMeter.css';

export default class GasMeter extends React.Component {
    state = {
        scrolled: false
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100 && window.scrollY < 400) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }
        })
    }

    render() {
        //now only one item but will be changed to a list
        return (
            
            <div className={this.state.scrolled ? 'cardBig GasCard' : 'cardSmall GasCard'}>
                <div class="progress-circle p50 gauge0">
                    <span>mittari 1</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                </div>
                <div class="progress-circle p10 gauge1">
                    <span>mittari 2</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>

                </div>
                <div class="progress-circle p30 gauge2">
                    <span>mittari 3</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>

                </div>
                <div class="progress-circle p15 gauge3">
                    <span>mittari 4</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>

                </div>

            </div>
        );
    }
}
