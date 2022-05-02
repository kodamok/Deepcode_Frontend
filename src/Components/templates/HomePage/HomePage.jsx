import React from 'react';
import styled from 'styled-components';
import CirclePhoto from '../../atoms/CirclePhoto/CirclePhoto';
import DeepCode from '../../atoms/DeepCode/DeepCode';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Technologies from '../Technologies/Technologies';

const Wrap = styled.div`
  // border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: clamp(0.5rem, 1rem + 2vw, 2rem);
`;

const WelcomeContainer = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(0.5rem, 0.5rem + 10vw, 5rem);

  .roundPhoto {
    padding: 1rem;
  }
`;

const Welcome = () => {
  return (
    <Wrap>
      <WelcomeContainer>
        <div className="roundPhoto">
          <CirclePhoto />
        </div>
        <div className="deepCode">
          <DeepCode name1={'DEEP'} name2={'CODE'} />
        </div>
      </WelcomeContainer>
      <About />
      <Technologies />
      <Experience />
    </Wrap>
  );
};

export default Welcome;
