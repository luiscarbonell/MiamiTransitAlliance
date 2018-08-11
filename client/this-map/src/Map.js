import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
import API_KEY from './config'



const API_K = API_KEY
export class SimpleMap extends Component {


  render() {
    return (

      <Map google={this.props.google} zoom={14} initialCenter={{lat: 25.7617 , lng: -80.1918}}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
        </InfoWindow>
      </Map>
    // </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: API_K
})(SimpleMap)