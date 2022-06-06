import React from 'react';
import styled from 'styled-components';
import caricatura from '../../../assets/png/caricatura.png';
import { CircleSign } from '../../../assets/styles/styledExports';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(300px, 1rem + 20vw, 400px);
  padding: clamp(0.5rem, 0.5rem + 10vw, 1rem);
`;

const CircleSignExtraStyle = styled(CircleSign)`
  padding: clamp(0.5rem, 0.1rem + 2vw, 0.2rem);
  width: clamp(250px, 1rem + 20vw, 350px);
  height: clamp(250px, 1rem + 20vw, 350px);

  img {
    aspect-ratio: 1/1;
    width: 100%;
  }
`;

const CirclePhoto = () => {
  return (
    <Wrap>
      <CircleSignExtraStyle border="2px solid black" id="circleSign">
        <img src={caricatura} alt="caricatura" />
      </CircleSignExtraStyle>
    </Wrap>
  );
};

export default CirclePhoto;
