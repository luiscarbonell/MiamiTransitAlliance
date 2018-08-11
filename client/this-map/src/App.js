import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import Controller from './components/controller/controller';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Controller />
        <Map />
      </div>
    );
  }
}

export default App;
