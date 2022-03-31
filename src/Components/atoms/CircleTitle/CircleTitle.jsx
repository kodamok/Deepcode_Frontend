import React from 'react';
import styled from 'styled-components';
import { CircleSign } from '../../../assets/styles/styledExports';
import { TitleSign } from '../../../assets/styles/styledExports';

const Container = styled.siv`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const CircleTitle = ({ titleSign1, titleSign2, span }) => {
  return (
    <Container id="tech">
      <CircleSign ratio1="1" ratio2="1" width="15%" border="2px solid 1rem">
        <TitleSign>
          {titleSign1}
          <span> {span}</span>
          {titleSign2}
        </TitleSign>
      </CircleSign>
    </Container>
  );
};

export default CircleTitle;
