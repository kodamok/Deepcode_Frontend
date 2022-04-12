import React from 'react';
import styled from 'styled-components';

// import curriculum from '../../../assets/files/curriculum.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(0.5rem, 0.5rem + 10vw, 1rem);

  h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    font-size: clamp(1.5rem, 0.5rem + 15vw, 5.063rem);
    color: ${({ theme }) => theme.color.title};
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.stroke};
  }
`;

const IntroText = styled.div`
  max-width: 50ch;
  display: flex;
  justify-content: center;
  border: 5px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  border-style: double;
  background-color: ${({ theme }) => theme.color.background};
  padding: clamp(0.5rem, 0.5rem + 3vw, 2rem);
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};

  p {
    color: ${({ theme }) => theme.color.cream};
    font-size: clamp(1rem, 0.1rem + 5vw, 1.2rem);
    text-align: left;
  }
`;

/* const MyCv = styled.div`
  position: relative;
  display: flex;
  padding: 2rem;
  z-index: 0;

  .curtain {
    position: relative;
    z-index: 2;
  }

  #bigCv {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: -20%;
    z-index: -10;
    opacity: 0;
  }
`; */

const About = () => {
  // INTENTO DE HACER MAGNIFYING GLASS
  /* const handleGlass = () => {
    const bigCv = document.getElementById('bigCv');
    let horizontal = 0;
    let vertical = 0;

    bigCv.addEventListener('mousemove', (e) => {
      horizontal = bigCv.style.transform = `translateX(${e.offsetX + 'px'})`;
      vertical = bigCv.style.transform = `translateY(${e.offsetY + 'px'})`;
      console.log(horizontal, vertical);
    });
  }; */

  /* bigCv.style.opacity = '100%';

  bigCv.style.transform = 'scale(2)';
  bigCv.style.zIndex = '4';
  console.log(bigCv); */

  return (
    <Wrap>
      <h2>About Me</h2>
      <IntroText>
        <p>
          My name is David Rabinovich and I am a MERN Fullstack developer. I have started to work as
          a developer 10 years ago when Flash Player was a thing. After an 8 month course I landed
          my first job as a Web - Developer for a small company in my home town. I was really
          excited! Although my plans changed and I ended up learning Music Production, singing and
          performing arts for the next 10 years, I never abandoned the passion and curiosity for
          coding and designing websites. Currently I finished the DCI (Digital Career Institute)
          MERN program and I am looking for a serious company to help me start this new journey!
        </p>
      </IntroText>

      {/* <MyCv>
        <img src={curriculum} alt="curriculum" width="1000px" className="curtain" />

        <img
          src={curriculum}
          alt="curriculum"
          width="1000px"
          id="bigCv"
          onMouseOverCapture={(e) => handleGlass(e)}
        />
      </MyCv> */}
    </Wrap>
  );
};

export default About;
