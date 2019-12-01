import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import './GasMeter.css';

export default class GasMeter extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {

    }

    render() {
        //now only one item but will be changed to a list

        return (
            <div className={this.props.min ? 'scrolling-wrap small1' : 'scrolling-wrap big1'}>
                <div className={!this.props.min ? 'cardBig GasCard marginOn first' : 'cardSmall GasCard marginOff first'}>
                    <div style={{
                        width: "330px",
                        height: "200px"
                    }}>
                        <ReactSpeedometer maxValue={100}
                            maxSegmentLabels={0}
                            fluidWidth
                            value={90}
                            needleColor="red"
                            startColor="red"
                            currentValueText="Mittari 1"
                            segments={3}
                            endColor="green" />
                    </div>
                </div>
                <div className={this.props.highlight ? 'cardBig GasCard' : 'cardSmall GasCard'}>
                    <div style={{
                        width: "330px",
                        height: "200px",
                    }}>
                        <ReactSpeedometer maxValue={100}
                            maxSegmentLabels={0}
                            fluidWidth
                            value={40}
                            needleColor="red"
                            startColor="red"
                            currentValueText="Mittari 2"
                            segments={3}
                            endColor="green" />
                    </div>
                </div>
                <div className={this.props.highlight ? 'cardBig GasCard' : 'cardSmall GasCard'}>
                    <div style={{
                        width: "330px",
                        height: "200px",
                    }}>
                        <ReactSpeedometer maxValue={100}
                            maxSegmentLabels={0}
                            fluidWidth
                            value={10}
                            needleColor="red"
                            startColor="red"
                            currentValueText="Mittari 3"
                            segments={3}
                            endColor="green" />
                    </div>
                </div>
                <div className={this.props.highlight ? 'cardBig GasCard' : 'cardSmall GasCard'}>
                    <div style={{
                        width: "330px",
                        height: "200px",
                    }}>
                        <ReactSpeedometer maxValue={100}
                            maxSegmentLabels={0}
                            fluidWidth
                            value={650}
                            needleColor="red"
                            startColor="red"
                            currentValueText="Mittari 4"
                            segments={3}
                            endColor="green" />
                    </div>
                </div>
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