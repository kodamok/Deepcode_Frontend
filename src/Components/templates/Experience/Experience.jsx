import React from 'react';
import styled from 'styled-components';
import nsLogo from '../../../assets/png/nomadStudio/nsLogo.png';
import landingDesk from '../../../assets/png/nomadStudio/landingDesk.png';
import landingPhone from '../../../assets/png/nomadStudio/landingPhone.png';
import { BsLink45Deg } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: clamp(1rem, 0.2rem + 5vw, 2rem);

  h2 {
    font-family: 'Amatic SC', cursive;
    font-weight: 900;
    font-size: clamp(1.5rem, 0.5rem + 15vw, 5.063rem);
    color: ${({ theme }) => theme.color.title};
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.color.stroke};
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 1rem;

  .logo {
    /* border: 2px solid red; */
    padding: 0;
    grid-column-start: 3;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .text {
    grid-column-start: 3;
    grid-column-end: 9;
    grid-row-start: 2;
    grid-row-end: 3;
    font-family: 'Assistant', sans-serif;
  }

  .links {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 2;
    align-self: center;
    display: flex;
  }

  .desk {
    grid-column-start: 11;
    grid-column-end: -1;
    grid-row-start: 1;
    grid-row-end: 16;
  }
  .phone {
    grid-column-start: 10;
    grid-column-end: 11;
    grid-row-start: 1;
    grid-row-end: 16;
  }

  .features {
    grid-column-start: 3;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 7;
    text-align: left;

    > h3 {
      font-family: 'Amatic SC', cursive;
      color: ${({ theme }) => theme.color.title};
      margin: 0;
      text-decoration: underline;
    }

    > p {
      margin: 0.5rem;
    }
  }

  .tasks {
    grid-column-start: 3;
    grid-column-end: 7;
    grid-row-start: 7;
    grid-row-end: 11;
    text-align: left;

    > h3 {
      font-family: 'Amatic SC', cursive;
      color: ${({ theme }) => theme.color.title};
      margin: 0;
      text-decoration: underline;

      ~ :nth-child(1n) {
        color: ${({ theme }) => theme.color.color3};
      }
    }

    > p {
      font-family: 'Barrio', cursive;
      font-size: ${({ theme }) => theme.fontSizeBarrio.m};
      margin: 0.5rem;
    }
  }

  .technologies {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 7;
    grid-row-end: 11;
    text-align: left;
    > h3 {
      font-family: 'Amatic SC', cursive;
      color: ${({ theme }) => theme.color.title};
      margin: 0;
      text-decoration: underline;

      ~ :nth-child(1n) {
        color: ${({ theme }) => theme.color.color2};
      }
    }

    > p {
      font-family: 'Barrio', cursive;
      font-size: ${({ theme }) => theme.fontSizeBarrio.m};
      margin: 0.5rem;
    }
  }
`;

const Experience = () => {
  return (
    <Wrap>
      <h2>Experience</h2>
      <Grid>
        <img className="logo" src={nsLogo} alt="nomad studio Logo" width="350px" />

        <div className="text">
          <p>
            Final project of the MERN full-stack web development program at Digital Career Institute
            gGmbh. I was in charge of the UX Design and Front End side of the project.
          </p>
          <p>
            The project is directed to the micro-management of projects, helping to create a clean
            workflow between customers and uprising creative freelancers.
          </p>
        </div>
        <div className="links">
          <a href="https://nomad-studio-netlify.app" target="_blank" rel="noreferrer">
            <BsLink45Deg size={90} />
          </a>
          <a href="https://nomad-studio-netlify.app" target="_blank" rel="noreferrer">
            <FaGithubSquare size={90} />
          </a>
        </div>
        <img className="desk" src={landingDesk} alt="deskPhoto" width="550px" />
        <img className="phone" src={landingPhone} alt="phonePhoto" width="157px" />
        <div className="features">
          <h3>Features</h3>
          <p>Login &amp; Signup</p>
          <p>Create Projects &amp; Contacts</p>
          <p>Statistics</p>
          <p>File Transfer</p>
          <p>PDF Invoice Download</p>
          <p>Instant Messaging (chatBox) </p>
          <p>Multilanguage Platform</p>
          <p>PWA Tecgnology</p>
        </div>
        <div className="tasks">
          <h3>Tasks</h3>
          <p>UX Design</p>
          <p>Logo Design</p>
          <p>Front-end</p>
        </div>
        <div className="technologies">
          <h3>Technologies</h3>
          <p>Adobe XD</p>
          <p>Javascript</p>
          <p>React</p>
          <p>NodeJs &amp; Express</p>
          <p>MongoDB &amp; Mongoose</p>
        </div>
      </Grid>
    </Wrap>
  );
};

export default Experience;
