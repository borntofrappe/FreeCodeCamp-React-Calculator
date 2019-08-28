import React, { Component } from 'react';
import './css/App.css';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorInput from './CalculatorInput';

/*
- render the components responsible for the calculator
- manage the state of the application
*/
class App extends Component {
  constructor(props) {
    super(props);
    /*
    in the state keep track of the string displayed in the calculator and the total of the computation
    */
    this.state = {
      current: '0',
      total: '',
    }
    // bind the method used on every button to change the display/execute the computation
    this.handleButton = this.handleButton.bind(this);
  }

  // reset the display's values
  handleClear() {
    this.setState({
      current: '0',
      total: '',
    })
  }
  handleComputation() {
    const { current, total } = this.state;
    if(!/[+\-*/]/.test(current[current.length -1])) {
      this.setState({
        current:  Math.round(eval(`${total}${current}`) * 1000) / 1000,
        total: '',
      })
    }
  }
  // include the operator
  handleOperator(operator) {
    const { current, total } = this.state;
    // if current already has an operator consider the last value of current
    // if this is an operator, substitute it with the new one
    // else push current to total and set the operator to current
    if(/[+\-*/]/.test(current)) {
      if(/[+\-*/]/.test(current[current.length -1])) {
        this.setState({
          current: operator,
        })
      } else {
        this.setState({
          current: operator,
          total: Math.round(eval(`${total}${current}`) * 1000) / 1000,
        })
      }
    } else {
      // without operators include the operator in current, move the expression of current to total
      this.setState({
        current: operator,
        total: current,
      })
    }
  }
  handleDigit(digit) {
    const { current } = this.state;
    this.setState({
      current: current !== '0' ? `${current}${digit}` : digit,
    })
  }
  handleDecimal() {
    const { current } = this.state;
    if(!/\./.test(current)) {
      this.setState({
        current: `${current}.`
      })
    }
  }

  // function called following a click event on each button in the component calculatorInput
  handleButton(e) {
    // consider the text of the pressed button
    const {textContent: value} = e.target;

    // according to the value dispatch the appropriate functions
    switch(value) {
      case 'ac':
        this.handleClear();
      break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handleDigit(value);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.handleOperator(value);
        break;
      case '=':
        this.handleComputation();
        break;
      case '.':
        this.handleDecimal();
        break;
      default:
          console.error('Technically, this should never happen.');
    }
  }

  /*
  in a wrapping container render the two components for the calculator display and input
  - include the stateful variables in calcularotDisplay
  - include the bound method _handleButton_ in calculatorInput
  */
  render() {
    const { current, total } = this.state;
    return (
      <div className="App">
            <CalculatorDisplay current={current} total={total}/>
            <CalculatorInput handleButton={this.handleButton}/>
      </div>
    );
  }
}

export default App;
