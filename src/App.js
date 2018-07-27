import React, { Component } from 'react';
import './css/App.css';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorInput from './CalculatorInput';

/** render the component responsible for the calculator and manage the state of the application 
 * 
 STATE
 it contains
 * an object for the display
 *    this nests different values for the different visuals to be included in the CalculatorDisplay component
 *    - previous computation, if present
 *    - current value, being typed through the buttons
 *    - total, already showing the running total, even before the eqaul sign is clicked
 * 
 * an array of objects for the input
 *    this nests one object for each button, detailing different tidbits of information
 *    - id, to identify the buttons, and to be included as **key** attribute for React
 *    - text, to include the in the buttons the matching visual

*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {
        current: '0',
        total: ''
      },
      buttons: [
        {
          id: "clear",
          text: "ac"
        },
        {
          id: "divide",
          text: "/"
        },
        {
          id: "multiply",
          text: "*"
        },
        {
          id: "seven",
          text: "7"
        },
        {
          id: "eight",
          text: "8"
        },
        {
          id: "nine",
          text: "9"
        },
        {
          id: "subtract",
          text: "-"
        },
        {
          id: "four",
          text: "4"
        },
        {
          id: "five",
          text: "5"
        },
        {
          id: "six",
          text: "6"
        },
        {
          id: "add",
          text: "+"
        },
        {
          id: "one",
          text: "1"
        },
        {
          id: "two",
          text: "2"
        },
        {
          id: "three",
          text: "3"
        },
        {
          id: "equals",
          text: "="
        },
        {
          id: "zero",
          text: "0"
        },
        {
          id: "decimal",
          text: "."
        }
      ]
    }
    // bind a method which is used when the user presses a button
    this.handleButton = this.handleButton.bind(this);
  }

  /** define the function run when a button in the input component is pressed
   * 
   * INPUT
   * click event
   * BEHAVIOR
   * according to the button pressed and the behavior expected by the calculator, display numbers, operator signs, computations. As needed   * 
  */

  handleButton(e) {
    const regexDigits = /[0-9]/;
    const regexOperators = /[+\-*/]/;
    const regexDecimalPoint = /\./;
    
    /*
    upon pressing a button, store its text in a variable to indentify the button itself 
    deal according to the consequences bound to each button, through a switch statement 
    this to update the current display 
    */

    // store in a variable the text which identifies each button
    let target = e.target;
    let value = target.textContent;

    // retrieve the values of the display from the state
    let display = this.state.display;

    if(value === "ac") {
      display.current = '0';
      display.total = '';
    }
    else if(regexDigits.test(value)) {
      if(display.current === '0') {
        display.current = '';
      }
      display.current += value;
    }
    else if(regexDecimalPoint.test(value)) {
      if(display.current.indexOf('.') === -1) {
        display.current += value;
      }
    }
    else if(regexOperators.test(value)) {
      if(display.current !== '0') {
        if(!regexOperators.test(display.current)) {
          display.total = display.current;
          display.current = '';
          display.current += value;
        }
        else {
          if(display.current.length === 1) {
            display.current = value;
          }
          else {
            // nothing
            let temp = display.total + display.current;
            // eslint-disable-next-line
            display.total = Math.round(eval(temp) * 10000)/10000;
            display.current = value;
          }
        }
      }
    }
    else {
      if(display.current !== '0') {
        let total = display.total + display.current;
        display.total = '';
        // eslint-disable-next-line
        display.current = Math.round(eval(total) * 10000)/10000;
      }
    }
    
    
    this.setState({
      display: display
    });

    
  }
  
  render() {
    return (
      <div className="App">
        <div className="Calculator">
            <CalculatorDisplay display={this.state.display}/>
            <CalculatorInput buttons={this.state.buttons} handleButton={this.handleButton}/>
        </div>
      </div>
    );
  }
}

export default App;
