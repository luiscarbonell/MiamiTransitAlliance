import React from 'react';
import {GoogleMap, lineSymbol} from 'google-maps-react';
import { Polyline } from 'google-maps-react/dist/components/Polygon';
import { Component } from "react";



export default class WithPolylines extends Component {


    render() { 
      const pathCoordinates=[ 
                              {lat:36.05298765935, lng:-112.083756616339}, 
                              {lat:36.2169884797185,lng: -112.056727493181}, 
                            ] 
            return ( 
                  <GoogleMap 
                          defaultZoom={this.props.zoom} 
                          defaultCenter={this.props.center} 
                  > 
                    <Polyline 
                          path={pathCoordinates} 
                          geodesic={true} 
                          options={{ 
                                    strokeColor: '#ff2527',
                                    strokeOpacity: 0.0,
                                    strokeWeight: 2,
                                    icons: [{ 
                                              icon: lineSymbol,
                                              offset: '0',
                                              repeat: '20px'
                                           }],
                                  }}
                    /> 
                  </GoogleMap>
                  )
    }


  };
  

  