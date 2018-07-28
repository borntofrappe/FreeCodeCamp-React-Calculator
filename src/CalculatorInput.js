import React from 'react';
import './css/CalculatorInput.css';

// map through the array of objects detailing the buttons and include one button element for each array item
// render the buttons, which are included as specified by the 4*5 grid
const CalculatorInput = (props) => {
  let buttons = props.buttons.map(
    button => <button key={button.id} id={button.id} onClick={props.handleButton}>{button.text}</button>
  );

  return(
    <div className="CalculatorInput">
      {
        buttons
      }
    </div>
  );
}

export default CalculatorInput;
