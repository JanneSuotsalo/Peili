import React from 'react';
import { Spring, Donut } from 'react-spring/renderprops'
import Gauge from 'react-radial-gauge';
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
        let opts = { size: 140, needleBaseColor:"#ffa500", currentValue: 10, progressColor: "#f00" }
        let opts1 = { size: 140, currentValue: 50, progressColor: "#0900ff" }
        let opts2 = { size: 140, currentValue: 45, progressColor: "#0900ff" }
        let opts3 = { size: 140, currentValue: 90, progressColor: "#00ff00" }
        
        return (
            <div className={this.state.scrolled ? 'cardBig GasCard' : 'cardSmall GasCard'}>
                <Gauge {...opts} />
                <Gauge {...opts1} />
                <Gauge {...opts2} />
                <Gauge {...opts3} />
            </div>
        );
    }
}
/*
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
*/