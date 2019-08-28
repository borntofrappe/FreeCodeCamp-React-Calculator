# freeCodeCamp React Calculator

> created 27/07/2018
>
> updated 28/08/2019

## Project Structure

The project has been developed locally through the `create-react-app` utility. In the **react-app** folder you find the components and styles completing the application, while [here you find a live demo](https://codepen.io/borntofrappe/pen/OwxKEY).

## Preface

This project sets out to create a functioning calculator with the React framerwork. I have previously completed the task with vanilla JavaScript, as you can find [here on CodePen](https://codepen.io/borntofrappe/pen/zjNKYG). Here however, I replicate the feat with the React library for the _Front End Libraries_ certification in the curriculum @freecodecamp.

## User Stories

The following user stories must be fulfilled to have the application pass all the tests set up @freecodecamp.

- [x] there exist a clickable element with `id="equals"` and containing the equal `=` sign;

- [x] there exist 10 clickable elements, denoting numbers in the 0-9 range. These ought to have an `id` detailing the number with a lowercase string (one, two...);

- [x] there exist 4 clickable elements for the primary mathematical operators. These ought to have a matching `id` describing the operation with a lowercase string (add, subtract...);

- [x] there exist a clickable element for the decimal `.` point, with `id="decimal"`;

- [x] there exist a clickable element for the clear button, with `id="clear"`;

- [x] there exist an element displaying values with `id="display"`.

- [x] the numbers included through the buttons are shown in the `#display`;

- [x] it is be possible to compute a chain of numbers and show the result in the display when pressing the equal `=` sign;

- [x] multiple zeroes are not accepted at the beginning of the input number;

- [x] the decimal point is appended to the input value. Two decimal points are not allowed and operations with decimal points return correct values;

- [x] when including multiple operator one after the other, the last one before the next number is included and used in the computation. An an additional feat:

  - [x] the last operator should be considered _unless_ the operator is the `-` minus sign. In this instance the operator should be retained as to signal a negative number.

- [x] when including an operator after the equal `=` sign, the calculator takes as first number the previous result and builds on top of it.

- [x] there are at least 4 decimal places when it comes to rounding.

## Technology Stack

Since I have already spent some time with the logic behind a JavaScript calculator, I decided to incorporate other technologies.

- **React.js** is the cornerstone of the application.

- **CSS grid** is used alongside flex properties for the layout of the calculator. The goal is to replicate the UI of a basic calculator, with a display at the top and buttons at the bottom.

With this small stack, the overall design of the page is kept at first as simple as possible, to prioritize making a functioning project first.

## Design

The following color and fonts are chosen for the project:

- `hsl(275, 95%, 49%)` as a theme color. Lighter and darker variations allow to include a subtle gradient. for the background. I obtained the color from my [Random Color Machine](https://codepen.io/borntofrappe/pen/yqXOXG).

- `hsl(0, 0%, 100%)` for the color of the phone and its background;

- `hsl(0, 0%, 30%)` for the text, of the buttons and of the display. Slightly lighter hues are included for less important parts of the UI, not to mention the border dividing the components.

- [Open Sans](https://fonts.google.com/specimen/Open+Sans) for the text of the entire application.

You can find a first version of the UI [right here](https://codepen.io/borntofrappe/pen/djzGWQ).

