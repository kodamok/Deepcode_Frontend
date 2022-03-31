import React from 'react';
import styled from 'styled-components';

const DeepCodeContainer = styled.div`
  // border: 2px solid blue;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: clamp(2.25rem, 0.5rem + 30vw, 7.594rem);
  font-family: 'Amatic sc';
  color: ${({ theme }) => theme.color.blue};
  -webkit-text-stroke: 1px black;
  line-height: 1;

  p {
    font-size: inherit;
    margin: 0;
  }

  span {
    color: white;
  }
`;

const DeepCode = ({ name1, name2 }) => {
  return (
    <DeepCodeContainer>
      <p>{name1}</p>
      <span>{name2}</span>
    </DeepCodeContainer>
  );
};

export default DeepCode;
