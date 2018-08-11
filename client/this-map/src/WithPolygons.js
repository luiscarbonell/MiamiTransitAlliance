import React from 'react';
import {Map} from 'google-maps-react';


const WithPolygons = props => {

  const polygon = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}

  ];

  return (
    <Map
      google={props.google}
      className="map"
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={14}>
      <Polygon
        fillColor="#0000FF"
        fillOpacity={0.35}
        paths={[polygon]}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
    </Map>
  );
};

export default WithPolygons;
