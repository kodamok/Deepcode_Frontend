import React from 'react';
import styled from 'styled-components';
import nsLogo from '../../../assets/png/nomadStudio/nsLogo.png';
import landingDesk from '../../../assets/png/nomadStudio/landingDesk.png';
import landingPhone from '../../../assets/png/nomadStudio/landingPhone.png';
import Button from '../../atoms/Button/Button';
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
  /*
===========================
  NOMAD STUDIO LAYOUT
==============================
*/
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 1rem;

  ${({ theme }) => theme.down(theme.breakpoint.sm)} {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
  }

  .logoImg {
    min-width: 175px;
    max-width: 350px;

    /* border: 2px solid red; */
    padding: 0;
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .text {
    grid-column-start: 2;
    grid-column-end: 7;
    grid-row-start: 2;
    grid-row-end: 3;
    font-family: 'Assistant', sans-serif;
    padding: 0.2rem;

    > p {
      text-align: left;
    }
  }

  .links {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
    align-self: center;
    display: flex;

    .chainLink {
      font-size: clamp(2rem, 0.5rem + 2vw, 15rem);
      justify-self: center;
    }

    .githubLink {
      font-size: clamp(2rem, 0.5rem + 2vw, 15rem);
    }
  }

  .desk {
    grid-column-start: 10;
    grid-column-end: 16;
    grid-row-start: 2;
    grid-row-end: 12;
    max-width: 700px;
    min-width: 250px;
    max-height: 450px;
    overflow: hidden;
    margin: 0;
    border-radius: 1rem;

    ${({ theme }) => theme.down(theme.breakpoint.sm)} {
      grid-column-start: 2;
      grid-column-end: 7;
      grid-row-start: 10;
      grid-row-end: 16;
      max-width: 250px;
      min-width: 120px;
    }

    img {
      display: block; /*remove inline-block spaces*/
      width: 100%; /*make image streatch*/
    }
  }
  .phone {
    grid-column-start: 8;
    grid-column-end: 10;
    grid-row-start: 2;
    grid-row-end: 12;
    max-width: 200px;
    min-width: 70px;
    max-height: 450px;
    overflow: hidden;
    margin: 0;
    border-radius: 1rem;

    ${({ theme }) => theme.down(theme.breakpoint.sm)} {
      grid-column-start: 2;
      grid-column-end: 7;
      grid-row-start: 3;
      grid-row-end: 10;
      max-width: 250px;
      min-width: 120px;
    }

    img {
      display: block; /*remove inline-block spaces*/
      width: 100%; /*make image streatch*/
    }
  }

  .features {
    grid-column-start: 2;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 16;

    .featureDescription {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      gap: 0.5rem;

      ${({ theme }) => theme.down(theme.breakpoint.m)} {
        justify-content: center;
      }
    }

    ${({ theme }) => theme.down(theme.breakpoint.m)} {
      grid-column-start: 2;
      grid-column-end: 16;
      grid-row-start: 8;
      grid-row-end: 16;
    }

    ${({ theme }) => theme.down(theme.breakpoint.sm)} {
      grid-column-start: 2;
      grid-column-end: 7;
      grid-row-start: 17;
      grid-row-end: 18;
    }
  }
`;

const Experience = () => {
  return (
    <Wrap>
      <h2>Experience</h2>
      <Grid>
        <div className="logoImg">
          <img className="logo" src={nsLogo} alt="nomad studio Logo" width="100%" />
        </div>

        <div className="text">
          <p>
            Final project of the MERN full-stack web development program at Digital Career Institute
            gGmbh. I was responsible of the UX Design, logo design and Front End side of the
            project.
          </p>
          <p>
            The project is directed to the micro-management of projects, helping to create a clean
            workflow between customers and uprising creative freelancers.
          </p>
        </div>
        <div className="links">
          <a href="https://nomad-studio-netlify.app" target="_blank" rel="noreferrer">
            <BsLink45Deg className="chainLink" />
          </a>
          <a href="https://nomad-studio-netlify.app" target="_blank" rel="noreferrer">
            <FaGithubSquare className="githubLink" />
          </a>
        </div>
        <div className="desk">
          <img src={landingDesk} alt="deskPhoto" />
        </div>
        <div className="phone">
          <img src={landingPhone} alt="phonePhoto" />
        </div>
        <div className="features">
          <div className="featureDescription">
            <Button almond text="Login" width="auto" />
            <Button almond text="Signup" width="auto" />
            <Button almond text="Projects Manager" width="auto" />
            <Button almond text="Contact Book" width="auto" />
            <Button almond text="File Transfer" width="auto" />
            <Button almond text="PDF Invoice Download" width="auto" />
            <Button almond text="chatBox" width="auto" />
            <Button almond text="Multilanguage" width="auto" />
            <Button almond text="PWA Tecgnology" width="auto" />
            <Button almond text="React" width="auto" background="#A7CE5F" />
            <Button almond text="AdobeXD" width="auto" background="#A7CE5F" />
            <Button almond text="Styled Components" width="auto" background="#A7CE5F" />
          </div>
        </div>
        <div className="technologies"></div>
      </Grid>
    </Wrap>
  );
};

export default Experience;
