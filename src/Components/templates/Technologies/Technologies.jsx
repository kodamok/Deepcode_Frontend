import React from 'react';
import styled from 'styled-components';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiExpress,
  SiCss3,
  SiStyledcomponents,
  SiAdobexd,
  SiMongodb,
  SiTypescript
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

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
    line-height: 1;
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  border-radius: 10px;
  gap: 1rem;
  padding: clamp(0rem, 0.2rem + 5vw, 2rem);
  max-width: 900px;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    > div {
      margin-bottom: 1rem;
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizeBarrio.m};
    color: ${({ theme }) => theme.color.cream};

    displax: flex;
    flex-wrap: wrap;
    line-height: 1;
    text-align: center;
    margin: 0.2rem;
  }
`;
const Technologies = () => {
  const randomColorYes = () => {
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
  };

  return (
    <Wrap>
      <FlexContainer>
        <h2>Technologies</h2>
        <Flex>
          <div className="box">
            <div>
              <SiJavascript size={80} color={randomColorYes()} />
            </div>
            <h4>Javascript</h4>
          </div>
          <div className="box">
            <div>
              <SiReact size={80} color={randomColorYes()} />
            </div>
            <h4>React</h4>
          </div>
          <div className="box">
            <div>
              <SiHtml5 size={80} color={randomColorYes()} />
            </div>
            <h4>Html</h4>
          </div>
          <div className="box">
            <div>
              <FaNodeJs size={80} color={randomColorYes()} />
            </div>
            <h4>Node</h4>
          </div>
          <div className="box">
            <div>
              <SiExpress size={80} color={randomColorYes()} />
            </div>
            <h4>Express</h4>
          </div>
          <div className="box">
            <div>
              <SiCss3 size={80} color={randomColorYes()} />
            </div>
            <h4>Css</h4>
          </div>
          <div className="box">
            <div>
              <SiStyledcomponents size={80} color={randomColorYes()} />
            </div>
            <h4>Styled</h4>
            <h4>Components</h4>
          </div>
          <div className="box">
            <div>
              <SiAdobexd size={80} color={randomColorYes()} />
            </div>
            <h4>AdobeXd</h4>
          </div>
          <div className="box">
            <div>
              <SiMongodb size={80} color={randomColorYes()} />
            </div>
            <h4>Mongo DB/</h4>
            <h4>Mongoose</h4>
          </div>
          <div className="box">
            <div>
              <SiTypescript size={80} color={randomColorYes()} />
            </div>
            <h4>Typescript</h4>
          </div>
        </Flex>
      </FlexContainer>
    </Wrap>
  );
};

export default Technologies;
