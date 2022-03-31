import React from 'react';
import styled, { keyframes } from 'styled-components';

const floating1 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
`;

const NavLogo = styled.div`
  /* border:2px solid red; */
  position: relative;
  flex-basis: 4em;
  font-size: 3.375rem;
  font-family: 'Amatic SC';
  /*  padding: 0; */
  line-height: 1;
  text-align: center;

  .sun-ball {
  }

  h3 {
    font-family: 'Amatic SC', cursive;
    line-height: 0;
  }

  span {
    // border: 1px solid red;
    position: relative;
    font-size: 4rem;
    margin-inline: 0.5rem;

    ::after {
      content: '';
      position: absolute;
      // border: 1px solid black;
      width: 15px;
      height: 15px;
      top: 30px;
      left: 7px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.background};
      box-shadow: 0 0 10px 4px ${({ theme }) => theme.color.teal};
      z-index: 500;

      animation-name: ${floating1};
      animation-duration: 2s;
      animation-direction: alternate-reverse;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-delay: 0.5s;
    }
  }
`;

const LogoWithSunball = () => {
  return (
    <NavLogo>
      <div className="sun-ball"></div>
      <h3>
        Deep<span>U</span>Code
      </h3>
    </NavLogo>
  );
};

export default LogoWithSunball;
