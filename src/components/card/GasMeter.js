import React from 'react';
import './GasMeter.css';
import { Line, Circle } from 'rc-progress';
import { IoIosStats } from 'react-icons/io';
import { Collapse } from 'react-collapse';
import Arrow from '../../components/Arrow/Arrow'

export default class GasMeter extends React.Component {
    state={
        showAnim: false
    }
    constructor(props) {
        super(props)
    }
    clicked = () => {
        this.setState((prevState) => {
            return { showAnim: !prevState.showAnim };
        });
    }

    componentDidMount() {

    }

    render() {
        //now only one item but will be changed to a list

        return (
            <div className='LifeMeters'>
                <div className="LifeMeterHeader" onClick={this.clicked}>
                    <IoIosStats size={30} /><p>Life Meters</p><div className="lifeMeterNav"><Arrow anim={this.state.showAnim}/></div>
                </div>
                <Collapse isOpened={this.state.showAnim}>
                    <div className="LifeMeterCell">
                        <p>Mittari 1</p>
                        <Line className="LifeMeterLine1" percent="60" strokeWidth="2" strokeColor="#228B22" />
                    </div>
                    <div className="LifeMeterCell">
                        <p>Mittari 2</p>
                        <Line className="LifeMeterLine1" percent="40" strokeWidth="2" strokeColor="#228B22" />
                    </div>
                    <div className="LifeMeterCell">
                        <p>Mittari 3</p>
                        <Line className="LifeMeterLine1" percent="20" strokeWidth="2" strokeColor="#228B22" />
                    </div>
                    <div className="LifeMeterCell">
                        <p>Mittari 4</p>
                        <Line className="LifeMeterLine1" percent="90" strokeWidth="2" strokeColor="#228B22" />
                    </div>
                </Collapse>
            </div>

        );
    }
}