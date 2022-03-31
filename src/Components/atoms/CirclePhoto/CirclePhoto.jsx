import React from 'react';
import styled from 'styled-components';
import caricatura from '../../../assets/png/caricatura.png';
import { CircleSign } from '../../../assets/styles/styledExports';

const CircleSignExtraStyle = styled(CircleSign)`
  padding: clamp(0.5rem, 0.1rem + 2vw, 0.2rem);
  width: clamp(250px, 1rem + 20vw, 350px);

  img {
    aspect-ratio: 1/1;
    width: 100%;
  }
`;

const CirclePhoto = () => {
  return (
    <CircleSignExtraStyle border="2px solid black" backgroundColor="none">
      <img src={caricatura} alt="caricatura" />
    </CircleSignExtraStyle>
  );
};

export default CirclePhoto;
