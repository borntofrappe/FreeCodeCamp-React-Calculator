import React, { Component } from 'react';
import './css/App.css';
import Calculator from './Calculator';

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
        previous: '',
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
    /*
    upon pressing a button, store its text in a variable to indentify the button itself 
    deal according to the consequences bound to each button, through a switch statement 
    this to update the current display 
    */

    // store in a variable the id which identifies each button
    let target = e.target;
    let id = e.target.getAttribute("id");

    // retrieve the values of the display from the state
    let display = this.state.display;
    
    /*
    different buttons lead to different interactions
    - clear => clear the text in the current display 
    - zero => add a 0, but avoid two consecutive zeros at the beginning of the display
    - numbers greater than 0 => append the number 
    - operator signs => push the text in the previous position and displays the operator prominently 
    - decimal point => add only if there doesn't exist a single decimal point
    */

    switch(value) {
      case 'clear':
        display.previous = '';
        display.current = 0;
        display.total = '';
        break;

      case 'zero':
        if(currentDisplay.length === 1 && currentDisplay[0] === '0') {
          // do nothing
        }
        else {
          display.current += value;
          display.total = `= ${display.current}`;
        }
      break;

      case 'one':
      case 'two':
      case 'three':
      case 'four':
      case 'five':
      case 'six':
      case 'seven':
      case 'eight':
      case 'nine':
        if(currentDisplay === '0' || regexOperator.test(currentDisplay)) {
          currentDisplay = '';
        }
        currentDisplay += value;
        totalDisplay = `= ${currentDisplay}`;

        break;

      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        if(!regexOperator.test(currentDisplay)) {          
          previousDisplay = currentDisplay;
          currentDisplay = value;
        } 
        else {
          currentDisplay = value;
        }
        break;

      case 'decimal':
        if(currentDisplay.indexOf('.') === -1) {
          currentDisplay += value;
          totalDisplay = `= ${currentDisplay}`;

        }
        break;

      default:
        break;
    }


    this.setState({
      display: {
        previous: previousDisplay,
        current: currentDisplay,
        total: totalDisplay
      }
    });

    
  }
  
  render() {
    return (
      <div className="App">
        <Calculator buttons={this.state.buttons} display={this.state.display} handleButton={this.handleButton}/>
      </div>
    );
  }
}

export default App;
