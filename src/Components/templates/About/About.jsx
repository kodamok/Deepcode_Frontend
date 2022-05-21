import React from 'react';
import styled from 'styled-components';
import curriculum from '../../../assets/files/curriculum.pdf';
let emoji = require('node-emoji');

// import curriculum from '../../../assets/files/curriculum.svg';
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(0.5rem, 0.5rem + 10vw, 1rem);
  min-height: 80vh;

  h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    font-size: clamp(1.5rem, 0.5rem + 15vw, 5.063rem);
    color: ${({ theme }) => theme.color.title};
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.stroke};
  }
`;

const IntroText = styled.div`
  max-width: 70ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  //border-style: double;
  background-color: ${({ theme }) => theme.color.background};
  padding: clamp(0.5rem, 0.5rem + 3vw, 2rem);
  //box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};

  & > :nth-child(4) {
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.color.cream};
    font-size: clamp(1rem, 0.1rem + 5vw, 1.2rem);
    text-align: left;

    > span {
      color: ${({ theme }) => theme.color.color3};
    }
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
          Hi my name is David Rabinovich, and I am the person people usually come to when they need
          some advice and/or emotional support...why? <br /> well,{' '}
          <span>
            I've immigrated 3 times, I speak 5 languages and I have a strong interest in psychology
            and personal developement so communication, adaptation and emotional intelligence come
            natural to me. {emoji.get('smile')}
          </span>
        </p>
        <p>
          <span>
            I studied sound at the Microfusa School In Barcelona and specialized in studio
            recording.
          </span>{' '}
          For the past 10 years I dedicated myself to music &amp; sound production as well as
          performance arts.
          <br />
        </p>
        <p>
          Web developement is not new to me, I've worked as front end developer 10 years ago for a
          short period of time with technologies like Adobe Flash, Javascript, Css and HTML.{' '}
          <span>
            Recently I extended/updated my knowledge learning UX/UI Design together with few on-line
            marketing tools through Udemy as well as Javascript, React and nodejs, HTML and CSS
            while simultanously being the tutor and representative of my class{' '}
          </span>
          at{' '}
          <a href="https://digitalcareerinstitute.org/" target="_blank" rel="noreferrer">
            Digital Career Institute gGmbH.
          </a>
        </p>
        <p>
          <a href={curriculum} target="_blank" rel="noreferrer">
            {emoji.get('point_right')} RESUME {emoji.get('point_left')}
          </a>
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
