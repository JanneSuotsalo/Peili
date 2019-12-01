import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './GoogleMap.css'

export class MapHolder extends React.Component {

    render() {
        return (
            <div className="spacer">
            <Map style={{ height: '40%', width: '100%' }}
            google={this.props.google}
            zoom={14} initialCenter={{
                lat: 60.168579,
                lng: 24.952638
            }}>
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 60.168579, lng: 24.952638 }} />
                <Marker />
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_KEY)
})(MapHolder)