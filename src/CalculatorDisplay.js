import React from 'react';
import './css/CalculatorDisplay.css';
import styled, { css } from 'styled-components'

const Header = styled.h2`
  font-size: 0.9rem;
  color: rgba(81,81,81,0.5);

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  ${props => props.display && css`
    font-size: 1.5rem;
    color: rgba(81,81,81,0.8);
    @media (min-width: 500px) {
      font-size: 2.2rem;
    }
  `}
`;
const CalculatorDisplay = (props) => {
  return(
    <div className="CalculatorDisplay">

        <Header display>{props.display.previous}</Header>
        <Header display>{props.display.current}</Header>
        <Header display>{props.display.total}</Header>

    </div>
  );
};



export default CalculatorDisplay;
