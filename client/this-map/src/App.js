import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import Controller from './components/controller/controller';

class App extends Component {
  render() {
    return (
      <div>
  
      <h1 align="center">Interconnecting Map</h1>

      <div className="App">
		<Controller />
        <Map />
      </div>
      </div>
    );
  }
}

export default App;
