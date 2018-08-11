import React, { Component }  from 'react';
import './TimeSlider.css';

class TimeSlider extends Component {
	state = {
		time: 9
	};

	time = (event) => {
		console.log(event.target);
		let newTime = this.state.time;
		this.setState({time: newTime++});
	}

	render() {
		return (
			<div className="slidecontainer">
				<p id="display">Time: {this.state.time} a.m.</p>
				<input type="range"	min="1"	max="12"
					value={this.state.time}	onClick={this.time}
					className="slider" id="slider">
				</input>
			</div>
		);
	}
};

export default TimeSlider;
