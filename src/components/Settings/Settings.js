import React from 'react';
import './Settings.css';
import { Collapse } from 'react-collapse';
import Arrow from '../../components/Arrow/Arrow'
import { FiLogIn } from 'react-icons/fi';
import { FaMobile } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

export default class Settings extends React.Component {
    state = {
        showAnim: false,
        showAnim1: false,
        showAnim2: false
    }
    clicked = () => {
        this.setState((prevState) => {
            return { showAnim: !prevState.showAnim };
        });
    }
    clicked1 = () => {
        this.setState((prevState) => {
            return { showAnim1: !prevState.showAnim1 };
        });
    }
    clicked2 = () => {
        this.setState((prevState) => {
            return { showAnim2: !prevState.showAnim2 };
        });
    }
    render() {
        //now only one item but will be changed to a list

        return (
            <div className='SettingsDiv'>
                <p>{this.props.title}</p>
                <div className="SettingsDetail" onClick={this.clicked}>
                    <FiLogIn size={30} /><p>Kirjautumis Asetukset</p><div className="buttonSettingsDetail"><Arrow anim={this.state.showAnim} /></div>
                </div>
                <Collapse isOpened={this.state.showAnim}>
                    <div className="AccountDetails">
                        <p>Username:</p>
                        <p>password:</p>
                    </div>
                </Collapse>
                <div className="SettingsDark" onClick={this.clicked1}>
                    <FaMobile size={30} /><p>Tumma tila</p><div className="buttonDarkDetail"><Arrow anim={this.state.showAnim1} /></div>
                </div>
                <Collapse isOpened={this.state.showAnim1}>
                    <div className="DarkMode">
                        <p>Active Dark Mode:</p>
                        <label>
                            <Toggle icons={false} />
                        </label>
                    </div>
                </Collapse>
                <div className="SettingsNotification" onClick={this.clicked2}>
                    <IoMdNotificationsOutline size={30} /><p>Hälytykset</p><div className="buttonNotificationDetail"><Arrow anim={this.state.showAnim2} /></div>
                </div>
                <Collapse isOpened={this.state.showAnim2}>
                    <div className="Notification">
                        <p>Hälytykset: </p>
                        <label>
                            <Toggle icons={false} />
                        </label>
                    </div>
                    <div className="Notification">
                        <p>Sähköposti hälytykset: </p>
                        <label>
                            <Toggle icons={false} />

                        </label>
                    </div>
                </Collapse>
            </div>

        );
    }
}