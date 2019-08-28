import React from 'react';
import './css/CalculatorDisplay.css';

// render one header each for each display
// include the total and current values in two headings
const CalculatorDisplay = (props) => {
  const { current, total } = props;
  return(
    <div className="CalculatorDisplay">
      <h2>{total}</h2>
      {/* add an identifier as per the guidelines @freecodecamp */}
      <h1 id="display">{current}</h1>
    </div>
  );
};

export default CalculatorDisplay;
