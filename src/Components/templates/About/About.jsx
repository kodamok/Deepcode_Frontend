import React from 'react';
import styled from 'styled-components';
//import curriculum from '../../../assets/files/curriculum.pdf';
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
  max-width: 80ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  //border-style: double;
  background-color: ${({ theme }) => theme.color.background};
  padding: clamp(0.5rem, 0.5rem + 3vw, 2rem);
  //box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};

  & > :nth-child(5) {
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.color.cream};
    font-size: clamp(1rem, 0.1rem + 5vw, 1.5rem);
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
          Hi my Name is Davit R. and I like to design websites with <span>Adobe XD</span> and then
          program them within <span>React</span>.
          <br />
          <span>Deep Code </span>
          is the concept I developed that describes my approach toward life and coding.{' '}
          {emoji.get('smile')}
        </p>

        <p>
          <span>Deep</span> is your view through your life experences, those untransferible feelings
          you have of your vision, life, yourself, bussiness idea, goals, passion or wish which lays
          deep inside and you spend years trying to be in touch with. That inherent side of you that
          makes you unique! <br />
          <span>Code</span> is the materialization of all that in to the real world using the
          language as a tool in your unique way.
        </p>
        <p>
          <span>
            Imagine the effect a website can have when is created taking in count all this
            information. If you are interested write me a message and we can start work on your
            website today!
          </span>
        </p>
        {/* <p>
          <a href={curriculum} target="_blank" rel="noreferrer">
            {emoji.get('point_right')} RESUME {emoji.get('point_left')}
          </a>
        </p> */}
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
