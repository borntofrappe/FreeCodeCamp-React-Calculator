_Small note_

The project has been developed locally, through `create-react-app`. It is however available on CodePen, [right here](https://codepen.io/borntofrappe/pen/OwxKEY)

# Preface 

For the fourth project of five necessary to earn the _Front End Libraries_ certification @freeCodeCamp, the task is to create a functioning calculator.

Much alike for the [Random Quote Machine](https://codepen.io/borntofrappe/pen/yqXOXG) I have already built the [application before](https://codepen.io/borntofrappe/pen/zjNKYG), and I am rather proud of that effort. However and again, much alike for the [old version](https://codepen.io/borntofrappe/pen/VQYmpJ) of the quote machine, at the time I did not use any library, working with JavaScript only. To completely earn the certification, and measure up to the new requirements set by @freeCodeCamp, I therefore decided to create a new application, with the **React.js** library.

# Process

Since I have already spent some time with the logic behind a JS calculator, I decided to also include other technologies in the project. The "knowledge stack" I used can be briefly describe as follows:

- **React.js** is used for the structure of the page and also for the state management. This time around, I decided not to pick up Redux, as I felt I need more research on the library itself. 

- **CSS grid** is used alongside flex properties for the layout of the calculator. Nothing too fancy. The overall design is scheduled to replicate the simple UI of the calculator app, with display at the top and buttons at the bottom. You can get an idea [right here](https://codepen.io/borntofrappe/full/djzGWQ).

- **Styled Components** is included to style the project, and specifically components. I planned to use this library alonside normal CSS stylesheets, which were used for the overall design of the page (the layout for instance). The library is included to style smaller components, like buttons, or grid cells making up the calculator. Considering the component-based logic of React and supposedly styled components, its inclusion is limited to independent, self-contained elements. At the time of writing, I think I find one particular use case for the library, which still needs exploring.

With this small stack, the overall design of the page is kept at first as simple as possible, to prioritize making a functioning project first. 

The idea is to make the project work before making it pretty, even if some styling choices are already incorporated to add some default, pleasant-to-look-at starting point. I find that a few design choices (in terms of color, white space and centering for instance) help a lot in the beginning of the project.

Call it attachment, call it investment or even plain silly self-fulfilling prophecy, but it has worked rather well for me so fat.

## Design 

The following color and fonts are chosen for the project:

- **#9206F5** for the background. Color courtesy of my [Random Color Machine](https://codepen.io/borntofrappe/pen/yqXOXG). Always nice to use a tool I made of my own;

- **#fff** for the color of the phone and its background;

- **#252525** for the text, of the buttons and of the display. Different variations are included for lighter/ more transparent color choices, but centered around this starting value. In the end, I decided to pick a lighter hue, with #515151.

- [Open Sans](https://fonts.google.com/specimen/Open+Sans) for the text of the entire application;

You can find a first version of the UI [right here](https://codepen.io/borntofrappe/pen/djzGWQ).

**Update**

The [live version](https://codepen.io/borntofrappe/pen/djzGWQ) of the project UI shows the appearance of the application in its initial state. However, one crucial UI addition needs to be included, as concerns the display of a _functioning_ application. Where numbers are included one after the other, where the results are shown.

You can find the updated UI in the "starting-ui" folder. In the end, the React application uses a simplified version of this UI, but its design has been quite teaching, forcing me to realize how the design ought to accommodate for interactive elements, not immediately visible in a mockup.

## User Stories 

Before diving into the project without much care, as I learned in a previous instance, it is important to highlight the user stories the project must fulfill in order to pass the testing suite _@freeCodeCamp_, possibly with flying colors.

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

- [x] when including multiple operator one after the other, the last one before the next number is included and used in the computation;

- [x] when including an operator after the equal `=` sign, the calculator takes as first number the previous result and builds on top of it.

- [x] there are at least 4 decimal places when it comes to rounding.

Quite a hefty set of requirements, but requirements which do not question the current set up in the least. The UI included above should be able to accommodate all with simple adjustments.

## [React.js](https://reactjs.org/)

The following component-based structure is included on the basis of the HTML markup created for the simple UI.

|Component|Brief|
|---|---|
|`index.js`|Render the component responsible for the application|
|`App.js`|Nest a calculator container, with the components making up the calculator. Additionally, it manages the state of the application|
|`CalculatorDisplay`|Render the display. The numbers included in the calculator and the computation of them|
|`CalculatorInput`|Render the buttons of the calculator|


## [Styled Components](https://www.styled-components.com/)

The project uses the styling library _Styled Components_. It allows to easily define property-value pairs connected to the elements and components which are later rendered.

**Install** 

To use the library it is first necessary to include it in the environment set up with `create-react-app`. The following command, in the root folder, allows such a feat. 

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

Instead of styling components in a separate CSS file, the library is used by creating a custom component, which is immediately styled.

The syntax here used doesn't differ wildly from straight CSS, so the learning curve is slightly softened.

- create the styled component, with `styled.HTMLelement`

  ```JS
  const Header = styled.h2``;
  ```

- include property-value pairs in the backticks included after such an expression

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
        <Header className="ComponentName">Header!</Header>
      </div>
    );
  };
  ```

This simple example actually covers most of what the project at hand has used in reference to _Styled Components_. That being said, there's another nugget worth of information.
It is indeed possible to style components according to the `props` they hold. For instance, and for the project at hand, a second header is given a particular styling through the `current` prop.

```JS
const Header = styled.h2`
  font-size: 0.9rem;
  color: rgba(81,81,81,0.5);

  ${ props => props.current && css`
    text-decoration: underline;
  `}
`;

const ComponentName = () => {
  return(
    <div className="ComponentName">
      <Header className="ComponentName">Header!</Header>
      <Header className="ComponentName" current>Current Header!!</Header>
    </div>
  );
};
```

This feat is allowed by the way styled components are created, by the `backticks` which allow the script to include JavaScript functions.
