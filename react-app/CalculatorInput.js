import React from 'react';
import './css/CalculatorInput.css';

// starting from a static array describing the different buttons of the calculator include one button for each item
const CalculatorInput = (props) => {
  // following the guidelines @freecodecamp, each button has an arbitrary identifier
  const buttons = [
    {
      text: '0',
      id: 'zero',
    },
    {
      text: '1',
      id: 'one',
    },
    {
      text: '2',
      id: 'two',
    },
    {
      text: '3',
      id: 'three',
    },
    {
      text: '4',
      id: 'four',
    },
    {
      text: '5',
      id: 'five',
    },
    {
      text: '6',
      id: 'six',
    },
    {
      text: '7',
      id: 'seven',
    },
    {
      text: '8',
      id: 'eight',
    },
    {
      text: '9',
      id: 'nine',
    },
    {
      text: '.',
      id: 'decimal',
    },
    {
      text: '+',
      id: 'add',
    },
    {
      text: '-',
      id: 'subtract',
    },
    {
      text: '*',
      id: 'multiply',
    },
    {
      text: '/',
      id: 'divide',
    },
    {
      text: '=',
      id: 'equals',
    },
    {
      text: 'ac',
      id: 'clear',
    },
  ]
  const { handleButton }= props;
  const calculatorButtons = buttons.map(({ text, id }) => (
    <button key={id} id={id} onClick={handleButton}>{text}</button>
  ));
  return(
    <div className="CalculatorInput">
      {
        calculatorButtons
      }
    </div>
  );
}

export default CalculatorInput;
