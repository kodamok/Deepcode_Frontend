import React from 'react';
import styled from 'styled-components';
import CirclePhoto from '../../atoms/CirclePhoto/CirclePhoto';
import DeepCode from '../../atoms/DeepCode/DeepCode';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Technologies from '../Technologies/Technologies';
import BackToTop from '../../atoms/BackToTop/BackToTop';
import Contact from '../Contact/Contact';

const Wrap = styled.div`
  // border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: clamp(0.5rem, 0.5rem + 2vw, 2rem);
`;

const WelcomeContainer = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(0.5rem, 0.5rem + 2vw, 1.5rem);
  min-height: 80vh;

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
      <Contact />
      <a href="#top">
        <BackToTop />
      </a>
    </Wrap>
  );
};

export default Welcome;
