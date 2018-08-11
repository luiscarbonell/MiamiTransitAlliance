import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import TimeSlider from './components/controller/TimeSlider';
import Header from './Header.js'


class App extends Component {
  render() {
    return (
      <div className="App">

		<TimeSlider />

        <Header />
        <Map />
      </div>
    );
  }
}

export default App;
