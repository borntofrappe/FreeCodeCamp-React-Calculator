import React from 'react';
import './css/CalculatorInput.css';

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
