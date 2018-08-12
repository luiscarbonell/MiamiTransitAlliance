import React, { Component }  from 'react';
import './TimeSlider.css';

class TimeSlider extends Component {
    state = {
        time: '9:00',
        meridien: 'a.m.'        
    };

	render() {
        return (
                <div className="slider-container">
                    <div>{this.state.time} {this.state.meridien}</div>
                </div>
        );
	}
};

export default TimeSlider;
