import React from 'react';
import './css/CalculatorInput.css';

// starting from a static array describing the different buttons of the calculator include one button for each item
const CalculatorInput = (props) => {
  const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "=", "ac"];
  const { handleButton }= props;
  const calculatorButtons = buttons.map(button => <button key={button} data-button={button} onClick={handleButton}>{button}</button>);
  return(
    <div className="CalculatorInput">
      {
        calculatorButtons
      }
    </div>
  );
}

export default CalculatorInput;
