import React from 'react';
import TimeSlider from './TimeSlider';
import './controller.css';

const controller = () => {
	return (
        <div>
            <div>
                <TimeSlider />    
            </div>

            <div className="button-container">
                <button>Brightline</button>	
                <button>Tri-rail</button>	
                <button>Bus Route</button>	
            </div>
        </div>
	);
}

export default controller;
