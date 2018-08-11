import React, { Component } from 'react';
import './App.css';







class Header extends Component {
  render() {
    return (
      <div className="dd-wrapper">
        <div className="dd-header">
          <div className="dd-header-title">Interconncectivity Map</div>
        </div>
        <ul className="Day of the Week">
          <li className="Sunday">Sunday</li>
          <li className="Monday">Monday</li>
          <li className="Tuesday">Tuesday</li>
          <li className="Wednesday">Wednesday</li>
          <li className="Thursday">Thursday</li>
          <li className="Friday">Friday</li>
        </ul>
      </div>
    );
  }
}

export default Header;
