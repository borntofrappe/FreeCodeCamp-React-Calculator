import React from 'react';
import './css/CalculatorDisplay.css';

// render one header each for each display
// include the total and current displays according to the app's logic and App state
const CalculatorDisplay = (props) => {
  const { current, total } = props;
  return(
    <div className="CalculatorDisplay">
      <h2>{total}</h2>
      <h1 id="display">{current}</h1>
    </div>
  );
};

export default CalculatorDisplay;
