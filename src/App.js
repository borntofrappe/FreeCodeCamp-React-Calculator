import React, { Component } from 'react';
import './css/App.css';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorInput from './CalculatorInput';

/* render the components responsible for the calculator and manage the state of the application */

/*
 STATE
 containing
 * an object for the calculator display(s)
 *    this nests different values for the different visuals to be included in the CalculatorDisplay component
 *    - current value, being typed through the buttons
 *    - total, already showing the running total, even before the equal sign is clicked
 * 
 * an array of objects for the input
 *    this nests one object for each button, detailing
 *    - id, to identify the buttons, and to be included as **key** attributes
 *    - text, to be included in the buttons as to visually represent them

*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {
        // current is by default '0', while total is by default set to an empty string
        current: '0',
        total: ''
      },
      buttons: [
        // id dictated by @freeCodeCamp requirements
        // text describing the button's purpose
        // these are included in the order in which they will be rendered, in a grid
        /*
        as in 

        \ac\ac\/\*\
        \7\8\9\-\
        \4\5\6\+\
        \1\2\3\=\
        \0\0\.\=\

        ! ac, =, 0 are set to occupy twice the space of the other buttons
        */
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

  /** define the function which handles the click on the button elements
   * INPUT
   * click event
   * BEHAVIOR
   * according to the button pressed and the behavior expected by the calculator, 
   * display numbers, operator signs, computations
  */
  handleButton(e) {
    // define regular expressions which help identifying the content of the display 

    const regexDigits = /[0-9]/;
    // in between brackets you only need escaping the minuts - character, as this actually refers to the range character in regular expressions
    const regexOperators = /[+\-*/]/;
    
    /*
    upon pressing a button, store its text in a variable to indentify the button itself 
    update the current and total display according to this value and the contents of the display 
    */
    let target = e.target;
    let value = target.textContent;

    // retrieve the values of the display from the state
    let displayCur = this.state.display.current;
    let displayTot = this.state.display.total;

    // button clear: restore the display to their initial state
    if(value === 'ac') {
      displayCur = '0';
      displayTot = '';
    }

    // numbers: include the number if the initial 0 value is present, otherwise append the number to the current display
    else if(regexDigits.test(value)) {
      displayCur = (displayCur === '0') ? value : displayCur + value;
    }

    // decimal point: include the decimal point, unless one is already present in the current display
    else if(value === '.') {
      if(displayCur.indexOf('.') === -1) {
        displayCur += value;
      }
    }

    // operators: depending on the values held by the current display, include the operator/ substitute the operator
    else if(regexOperators.test(value)) {
      // assuming something other than the default value is included in the current display
      if(displayCur !== '0') {

        // if the current display does not include an operator, include the operator in the place of the numbers included in the current display
        // push the current numbers in the total display
        if(!regexOperators.test(displayCur)) {
          displayTot = displayCur;
          displayCur = '';
          displayCur += value;
        }
        // if the current display shows an operator, different behaviors are expected if the operator is the only value in the current display or it prefaces some numbers
        else {
          // if the operator is the only value (length === 1), include the new operator in the place of the old one
          if(displayCur.length === 1) {
            displayCur = value;
          }

          // if the operator is not the only value, compute the running total, show it in the total display and display the operator in the current display
          else {
            let runningTotal = displayTot + displayCur;
            // show the result with at most 4 decimal points (rounding up the number moving the decimal point forward and then dividing it tomove the decimal point back)
            // eval() is used to apply math logic to numbers stored in strin values. The input value of eval is known and can only be numbers/operators/decimal points
            // EMERGING ISSUE: as evel() returns a number, whenever the decimal point is later included the app's logic will apply the .indexOf() function to a number, which results in an error (the function accepts solely strings)
            // to fix this issue you need to convert the number back to a string. One way to do it is by concatenating an empty string to the number (number + '')
            // alternatively and more explicitly, the .toString() function returns a string which represents the number passed as argument
            // eslint-disable-next-line
            displayTot = (Math.round(eval(runningTotal) * 10000)/10000).toString();
            displayCur = value;
          }
        }
      }
    }

    // equal sign: assuming the current display has some content displayed, sum the total (which accounts for the running total) and the current display
    else if(value === '=') {
      if(displayCur !== '0') {
        let total = displayTot + displayCur;
        displayTot = '';
        // eslint-disable-next-line
        displayCur = (Math.round(eval(total) * 10000)/10000).toString();
      }
    }
    
    // update the state with the values defined by the modified displays
    this.setState({
      display: {
        current: displayCur,
        total: displayTot
      }
    });
  }
  
  /*
  in the App component render a div.Calculator used solely to position the calculator display and the two components responsible for the app's functionality 
  pass to these components the properties required to 1) display the values and computations and 1) include interactive buttons
  */
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
