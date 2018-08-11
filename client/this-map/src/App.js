import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import TimeSlider from './components/controller/TimeSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
		<TimeSlider />
        <Map />
      </div>
    );
  }
}

export default App;
