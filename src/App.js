import React, { Component } from 'react';
import './css/App.css';
import Calculator from './Calculator';

/** render the component responsible for the calculator and manage the state of the application 
 * 
 STATE
 * a field with an array of objects, used to define the different buttons (each with an id an text)
 * a field with an object, used to display the possible, different visuals in the calculator display  (the previous computation, if present, the current value, being typed through the buttons, total, already showing the running total before the eqaul sign is clicked)

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

  handleButton(e) {
    /*
    upon pressing a button, store its text in a variable to indentify the button itself 
    deal according to the consequences bound to each button, through a switch statement 
    this to update the current display 
    */

    // store in a variable the text included by the textContent method 
    let value = e.target.textContent;
    // store in a variable the current number displayed boldly on screen
    let display = this.state.display.current;
    
    /*
    different buttons lead to different interactions
    - ac => clear the text in the current display 
    - 0 => add a 0, but not in case the string starts with a zero (avoid having 2 zeros at the beginning of the result)
    - . => add only if there doesn't exist a single decimal point
    - any number other than 0 => appends the number 
    - any operator sign pushes the text in the previous position and displays the operator prominently 
    */

    switch(value) {
      case 'ac':
        display = '0';
        break;
      case '0':
        if(display[0] !== '0') {
          display += value;
        }
      break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(display === '0') {
          display = '';
        }
        display += value;
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      break;
      case '.':
        if(display.indexOf('.') === -1) {
          display += value;
        }
      break;
    }


    this.setState({
      display: {
        current: display,
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
