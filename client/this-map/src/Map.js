import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";
import React, { Component } from "react";
import API_KEY from "./config";


const API_K = API_KEY;


export class SimpleMap extends Component {
  render() {
    const polyline = [
      { lat: 37.789411, lng: -122.422116 },
      { lat: 37.785757, lng: -122.421333 },
      { lat: 37.789352, lng: -122.415346 }
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
        fillColor="#0000FF"
        fillOpacity={0.35}
        path={polyline}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
     
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_K
})(SimpleMap);


