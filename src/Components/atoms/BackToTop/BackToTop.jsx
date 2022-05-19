import React from 'react';
import styled, { keyframes } from 'styled-components';

const floating = keyframes`
    0%
    {
      transform: translateY(0);
    }

    50% {
      transform: translateY(20px);
    }
  
    100% {
        transform: translateY(0);
      }

`;

const BackToTopArrow = styled.div`
  position: fixed;
  top: 83%;
  right: 100px;
  z-index: 10;

  ${({ theme }) => theme.down(theme.breakpoint.sm)} {
    right: 20px;
  }

  animation-name: ${floating};
  animation-duration: 2s;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  .topText {
    text-align: center;
    font-family: 'Barrio', cursive;
    font-size: ${({ theme }) => theme.fontSizeBarrio.ml};
    transform: rotate(-90deg);
    margin-bottom: 15px;
    color: ${({ theme }) => theme.color.title};

    ${({ theme }) => theme.down(theme.breakpoint.sm)} {
      font-size: ${({ theme }) => theme.fontSizeBarrio.m};
    }
  }

  .arrow {
    border-bottom: 30px solid ${({ theme }) => theme.color.blue};
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    ${({ theme }) => theme.down(theme.breakpoint.sm)} {
      border-bottom: 20px solid ${({ theme }) => theme.color.blue};
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
    }
  }
`;

const BackToTop = () => {
  return (
    <BackToTopArrow>
      <div className="backToTop">
        <div className="topText">TOP</div>
        <div className="arrow"></div>
      </div>
    </BackToTopArrow>
  );
};

export default BackToTop;
