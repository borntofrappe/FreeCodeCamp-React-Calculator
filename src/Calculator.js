import React from 'react';
import './css/Calculator.css';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorInput from './CalculatorInput';

const Calculator = (props) => {
  return(
    <div className="Calculator">
        <CalculatorDisplay display={props.display}/>
        <CalculatorInput buttons={props.buttons} handleButton={props.handleButton}/>
    </div>
  );
}

export default Calculator;
