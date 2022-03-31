import React from 'react';
import styled from 'styled-components';
import NSx512 from '../../../assets/png/NSx512.png';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: clamp(1rem, 0.2rem + 5vw, 2rem);

  h2 {
    line-height: 1;
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
  }
`;

const Img = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(1rem, 0.2rem + 5vw, 5rem);

  h4 {
    font-size: ${({ theme }) => theme.fontSizeBarrio.l};
    color: ${({ theme }) => theme.color.teal};
    displax: flex;
    flex-wrap: wrap;
    line-height: 1;
    text-align: center;
    margin: 0.2rem;
  }
`;

const Experience = () => {
  return (
    <Wrap>
      <h2>Experience</h2>
      <a href="https://nomad-studio.netlify.app/" target="_blank" rel="noreferrer">
        <Img>
          <img src={NSx512} alt="NomasStudio" width="215px" />
          <div>
            <h4>Nomad Studio</h4>
          </div>
        </Img>
      </a>
    </Wrap>
  );
};

export default Experience;
