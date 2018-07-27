_Small note_

The current project is being developed locally, through `create-react-app`.

Working pen [right here](https://codepen.io/borntofrappe/pen/OwxKEY)

# Preface 

For the fourth project of five necessary to earn the _Front End Libraries_ certification @freeCodeCamp, the task is to create a functioning calculator.

Much alike for the [Random Quote Machine](https://codepen.io/borntofrappe/pen/yqXOXG) I have already built the [application before](https://codepen.io/borntofrappe/pen/zjNKYG), and I am rather proud of that effort. However, much alike for the [old version](https://codepen.io/borntofrappe/pen/VQYmpJ) of the quote machine, I did not use any library, working with JavaScript only. To completely earn the certification, and measure up to the new requirements set by @freeCodeCamp, I therefore decided to create a new application, with the React.js library.

# Process

Since I have already spent some time with the logic behind a JS calculator, I decide to also include other technologies in the project. The "knowledge stack" I use can be described up momentarily as follows:

- **React.js** is used for the structure of the page and also for the state management. This time around, I decide not to pick up Redux, as I feel I need more research on the library itself. 

- **CSS grid** is used alongside flex properties for the layout of the calculator. Nothing too fancy. The overall design is scheduled to replicate the simple UI of the calculator app, with display at the top and buttons at the bottom.

- **Styled Components** is included anew to style the project, and specifically components. I plan to use this library alonside normal CSS stylesheets, which are used for the overall design of the page (the layout for instance). The library is included to style smaller components, like buttons, or grid cells making up the calculator. Considering the component-based logic of React and supposedly styled components, its inclusion is limited to independent, self-contained elements.

With this small stack, the overall design of the page is kept as first simple as possible, to prioritize making a functioning project first. 

The idea is to make the project work before making it pretty, even if some styling choices are already incorporated to add some default, pleasant-to-look-at starting point. I find that a few design choices (in terms of color, white space and centering for instance) help a lot in the beginning of the project.

Call it attachment, call it investment or even plain silly self-fulfilling prophecy, but it has worked rather well for me so fat.

## Design 

The following color and fonts are chosen for the project:

- **#9206F5** for the background. Color courtesy of my [Random Color Machine](https://codepen.io/borntofrappe/pen/yqXOXG). Always nice to use a tool I made of my own;

- **#fff** for the color of the phone and its background;

- **#252525** for the text, of the buttons and of the display. Different variations are included for lighter/ more transparent color choices, but centered around this starting value.

- [Open Sans](https://fonts.google.com/specimen/Open+Sans) for the text of the entire application;

You can find a first version of the UI [right here](https://codepen.io/borntofrappe/pen/djzGWQ).

**Update**

The [live version](https://codepen.io/borntofrappe/pen/djzGWQ) of the project UI shows the appearance of the application in its initial state. However, one crucial UI addition needs to be included, as concerns the display of a _functioning_ application. Where numbers are included one after the other, where the resulta are shown.

Taking inspiration from the calculator app on my very own phone, the following logic is used:

- by default, the display shows a 0;

- as numbers are included, they are shown in the place of the 0. At the same time, below said display, another screen keeping track of the current progress is included (in the form of "= included numbers");

- when operations are included (+-*/), display in the place of the numbers the operation sign. The numbers are pushed above;

- when _other_ numbers, following the operation are included, show them in the place of the operation sign. The updating display below is updated to show the result of the temporary operation. In the form "= result of the operation". This even before the "=" button is pressed.

In addition, different UI is included when multiple operations are chained together. A difference is presented for whether or not the "=" button is pressed before a new operation is included.

**If** operations are chained together _without_ pressing the "=" button (like 6+2+4+6-2/3), _show_ the previous numbers on top of one another (three at most, after which they need to be hidden from the top).

**If** operations are added anew _after_ the "=" button is pressed (like 6+2=8, 8+2), _show_ two a dashed line separating the previous and current operation (the previous operation should hide all but the last three numbers, to avoid overcrowding).

You can see the updated UI in the "starting-ui" folder. It may sound complicated, and maybe it is, but it is doable. Hopefully.

One step at a time.

## User Stories 

Before diving into the project without much care, as I learned in a previous instance, it is important to highlight the user stories the project must fulfill in order to pass the testing suite @freeCodeCamp with flying colors.

- [x] there exist a clickable element with `id="equals"` and containing the equal `=` sign;

- [x] there exist 10 clickable elements, denoting numbers in the 0-9 range. These ought to have an id detailing the number with a lowercase string (one, two...);

- [x] there exist 4 clickable elements for the primary mathematical operators. These should come matched with an id describing the operation with a lowercase string (add, subtract...);

- [x] there exist a clickable element for the decimal `.` point, with `id="decimal"`;

- [x] there exist a clickable element for the clear button, with `id="clear"`;

- [x] there exist an element displaying values with `id="display"`. When clicked, this returns the calculator to its initial state, displaying 0 in the display; <!-- yay -->

- [x] the numbers included through the buttons are shown in the `#display`;

- [x] it is be possible to compute a chain of numbers and show the result in the display when pressing the equal `=` sign;

- [x] multiple zeroes are not accepted at the beginning of the input number;

- [x] the decimal point is appended to the input value. Two decimal points are not allowed. Operations with decimal points return correct values;

- [x] when including multiple operator one after the other, the last one before the next number is included is used in the computation;

- [x] when including an operator after the equal `=` sign, the calculator takes as first number the previous result and builds on top of it.

- [x] there are at least 4 decimal places when it comes to rounding.

Quite a hefty set of requirements, but requirements which do not question the current set up in the least. The UI included above should be able to accommodate for all with simple adjustments.

## [React.js](https://reactjs.org/)

The following component-based structure is included on the basis of the HTML markup created for the simple UI.

|Component|Brief|
|---|---|
|`index.js`|Render the component responsible for the application|
|`App.js`|Nest calculator container, manage state|
|`Calculator.js`|Nest the display and input sub-divisions of the calculator|
|`CalculatorDisplay`|Render the display (with input, result)|
|`CalculatorInput`|Render the buttons of the calculator|


## [Styled Components](https://www.styled-components.com/)

**Install** 

Styled components can be easily included in the environment set up with `create-react-app` by running the following command in the root folder:

```code
npm i styled-components
```

In the package.json it should be possible to find the connected package included.

```JSON
{
  "styled-components": "^3.3.3"
}
```
**Style**

Instead of styling components, you create with the library a component, which is then styled according to property-value pairs.

The syntax here used doesn't differ wildly from straight CSS, so the learning curve is slightly softened.

- create the styled component, with `styled.HTMLelement`

  ```JS
  const Header = styled.h2``;
  ```

- include property-value pairs in the described backticks.

  ```JS
  const Header = styled.h2`
    font-size: 0.9rem;
    color: rgba(81,81,81,0.5);
  `;
  ```

- include the component as you would normally for any custom component, in the React structure.

  ```JS
  const ComponentName = () => {
    return(
      <div className="ComponentName">
        <Header className="ComponentName">Header!!</Header>
      </div>
    );
  };
  ```

This simple example actually covers most of what the project at hand has used in reference to _Styled Components_. That being said, there's another nugget worth of information.
It is indeed possible to style components according to the props they held. For instance and for the project at hand, a second header is given a particular styling through the `extra` prop.

```JS
const Header = styled.h2`
  font-size: 0.9rem;
  color: rgba(81,81,81,0.5);

  ${ props => props.extra && css`
    text-decoration: underline;
  `}
`;

const ComponentName = () => {
  return(
    <div className="ComponentName">
      <Header className="ComponentName">Header!!</Header>
      <Header className="ComponentName" extra>Extra Header!!</Header>
    </div>
  );
};
```
