import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";
import React, { Component } from "react";
import API_KEY from "./config";


const API_K = API_KEY;


export class SimpleMap extends Component {
  render() {
    const triangleCoords = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    
    ];
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 25.7617, lng: -80.1918 }}
      >
     
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1 />
          </div>
        </InfoWindow>
        <Polyline
          paths={triangleCoords}
          strokeColor='black'
          strokeOpacity={0.8}
          strokeWeight={2} />
     
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_K
})(SimpleMap);


