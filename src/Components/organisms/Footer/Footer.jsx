import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/LogoWithSunball/LogoWithSunball';

const Wrap = styled.div`
  // border: 1px solid red;
  position: relative;
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  font-family: 'Amatic SC', cursive;

  > span {
    color: ${({ theme }) => theme.color.pink};
    -webkit-text-stroke: 1px black;
    font-size: clamp(1.5rem, 0.5rem + 2vw, 11.391rem);
  }
`;

const Footer = ({ year1, year2 }) => {
  return (
    <Wrap>
      <span>{year1}</span>
      <Logo />
      <span>{year2}</span>
    </Wrap>
  );
};

export default Footer;
