import React from 'react';
import './css/CalculatorDisplay.css';
// import styled components to style the headers
import styled, { css } from 'styled-components'

/*
style the headers with a definite font size and color 
include a media query and updated properties if the element has a certain property
*/
const Header = styled.h2`
  font-size: 0.9rem;
  color: rgba(81,81,81,0.5);

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  ${props => props.current && css`
    font-size: 1.5rem;
    color: rgba(81,81,81,0.8);
    @media (min-width: 500px) {
      font-size: 2.2rem;
    }
  `}
`;

// render one header each for each display
// include the total and current displays according to the app's logic and App state
const CalculatorDisplay = (props) => {
  return(
    <div className="CalculatorDisplay">
      <Header className="Header">{props.display.total}</Header>
      <Header className="Header" current id="display">{props.display.current}</Header>
    </div>
  );
};

export default CalculatorDisplay;
