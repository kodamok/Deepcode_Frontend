import React from 'react';
import styled from 'styled-components';
/* import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiExpress,
  SiCss3,
  SiStyledcomponents,
  SiAdobexd,
  SiMongodb,
  SiTypescript
} from 'react-icons/si'; */
// import { FaNodeJs } from 'react-icons/fa';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  // border: 2px solid red;
  width: 100%;
  padding: clamp(0rem, 0.2rem + 1vw, 2rem);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // border: 1px solid blue;
  padding: clamp(0rem, 0.2rem + 1vw, 2rem);

  h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    font-size: clamp(1.5rem, 0.5rem + 15vw, 5.063rem);
    color: ${({ theme }) => theme.color.title};
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.stroke};
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  border: 5px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  border-style: double;
  padding: clamp(0.2rem, 0.2rem + 1vw, 2rem);
  max-width: 500px;
  min-width: 300px;

  .box1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid white;
    width: clamp(300px, 100px + 60vw, 500px);
    h3 {
      font-size: clamp(1.5rem, 0.5rem + 17vw, 5.063rem);
      -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.link};
      color: ${({ theme }) => theme.color.color2};
      displax: flex;
      flex-wrap: wrap;
      line-height: 1;
      text-align: center;
      margin: 0;
    }

    h4 {
      font-size: clamp(1.5rem, 0.5rem + 6vw, 2.25rem);
      -webkit-text-stroke: 2px ${({ theme }) => theme.color.color2};
      line-height: 0.2;
      margin: 0;
      color: ${({ theme }) => theme.color.color1};
    }

    h5 {
      -webkit-text-stroke: 2px ${({ theme }) => theme.color.color2};
      font-size: clamp(1.5rem, 0.5rem + 6vw, 2rem);
      line-height: 1;
      margin: 0;
      color: ${({ theme }) => theme.color.background};
    }
  }

  .box2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    gap: 1rem;
    border-bottom: 1px solid white;
    width: clamp(300px, 100px + 60vw, 500px);

    h3 {
      font-size: clamp(1.5rem, 0.5rem + 15vw, 5.063rem);
      -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.stroke};
      color: ${({ theme }) => theme.color.color3};
      displax: flex;
      flex-wrap: wrap;
      line-height: 1;
      text-align: center;
      margin: 0;
    }
  }

  .box3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    gap: 1rem;
    border-bottom: 1px solid white;
    width: clamp(300px, 100px + 60vw, 500px);

    h4 {
      -webkit-text-stroke: 2px ${({ theme }) => theme.color.stroke};
      font-size: clamp(1.5rem, 0.5rem + 10vw, 3rem);
      line-height: 1;
      margin: 0;
      color: ${({ theme }) => theme.color.blue};
    }
  }

  .box4 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    border-bottom: 1px solid white;
    width: clamp(300px, 100px + 60vw, 500px);

    h3 {
      font-size: clamp(1.5rem, 0.5rem + 17vw, 5.063rem);
      -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.stroke};
      color: ${({ theme }) => theme.color.color4};
      displax: flex;
      flex-wrap: wrap;
      line-height: 1;
      text-align: center;
      margin: 0rem;
    }
  }

  .box5 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    gap: 1rem;
    border-bottom: 1px solid white;
    width: clamp(300px, 100px + 60vw, 500px);

    h4 {
      -webkit-text-stroke: 2px ${({ theme }) => theme.color.color5};
      font-size: clamp(1.5rem, 0.5rem + 6vw, 2.3rem);
      line-height: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.color.background};
    }
  }
`;

const Technologies = () => {
  /* const randomColorYes = () => {
    const randomColor = [
      '#783661',
      '#58A4AC',
      '#EC7285',
      '#EC9C72',
      '#7F9C48',
      '#944378',
      '#366178'
    ];
    let color;
    for (let i = 0; i <= randomColor.length; i++) {
      let randomNum = Math.floor(Math.random() * i);
      color = randomColor[randomNum];
    }
    return color;
  }; */

  return (
    <Wrap>
      <FlexContainer>
        <h2>Technologies</h2>
        <Flex>
          <div className="box1">
            <h3>UXDesign</h3>
            <h4>SASS/CSS</h4>
            <h4>ADOBEXD</h4>
            <h5>STYLED COMPONENTS</h5>
          </div>
          <div className="box2">
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="box3">
            <h4>REACT</h4>
            <h4>NODEjs</h4>
          </div>
          <div className="box4">
            <h3>MONGODB</h3>
          </div>
          <div className="box5">
            <h4>MONGOOSE</h4>
            <h4>EXPRESS</h4>
          </div>
        </Flex>
      </FlexContainer>
    </Wrap>
  );
};

export default Technologies;
