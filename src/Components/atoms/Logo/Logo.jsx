import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  // border: 2px solid red;
  position: sticky;
  display: flex;
  flex-wrap: wrap;

  .logo-container {
    // border: 1px solid black;
    height: 55px;
    font-family: 'Amatic SC';
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* border:2px solid white; */
  }

  .dotsAndSlash {
    display: flex;
  }

  .dot-wrap {
    // border: 1px solid red;
    position: relative;
    padding: 5px;
    width: 5px;
    display: flex;
    align-items: flex-end;
  }

  .dot {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 8px;
    width: 8px;
    background: ${({ theme }) => theme.color.teal};
    border-radius: 50%;
  }

  .slashContainer {
    // border: 1px solid red;
    position: relative;
    height: 50px;
    width: 20px;

    .slash {
      position: absolute;
      right: 8px;
      background: ${({ theme }) => theme.color.teal};
      border-radius: 10px;
      height: 50px;
      width: 4px;
      transform: rotate(10deg);
      margin: 0 auto;
    }
  }

  .deepContainer {
    // border: 1px solid red;
    padding: 0;
    margin-bottom: 0;

    ${({ theme }) => theme.down(theme.breakpoint.sm)} {
      display: none;
    }
    h3 {
      font-family: 'Amatic SC', cursive;
      color: ${({ theme }) => theme.color.teal};
      line-height: 0rem;
      font-weight: 900;
      padding: 0;
      margin-left: 0;
      margin-top: 1.7rem;
    }
  }
`;

const Logo = () => {
  return (
    <Wrap>
      <div className="logo-container">
        <div className="dotsAndSlash">
          <span id="phone_menu" className="dot-wrap">
            <div className="dot"></div>
          </span>
          <span className="dot-wrap">
            <div className="dot"></div>
          </span>
          <span className="slashContainer">
            <div className="slash"></div>
          </span>
        </div>
        <div className="deepContainer">
          <h3>DeepCode</h3>
        </div>
      </div>
    </Wrap>
  );
};

export default Logo;
