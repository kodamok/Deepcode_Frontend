import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { BsLink45Deg } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

const Grid = styled.div`
  /*
===========================
  GRID LAYOUT LAYOUT
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
    grid-row-start: 5;
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

const Grid4experience = ({ logo, landingDesk, landingPhone, chainLink, gitHubLink, features }) => {
  return (
    <Grid>
      <div className="logoImg">
        <img className="logo" src={logo} alt="nomad studio Logo" width="100%" />
      </div>

      <div className="text">
        <p>
          Final project of the MERN full-stack web development program at Digital Career Institute
          gGmbh. I was responsible of the UX Design, logo design and Front End side of the project.
        </p>
        <p>
          The project is directed to the micro-management of projects, helping to create a clean
          workflow between customers and uprising creative freelancers.
        </p>
      </div>
      <div className="links">
        <a href={chainLink} target="_blank" rel="noreferrer">
          <BsLink45Deg className="chainLink" />
        </a>
        <a href={gitHubLink} target="_blank" rel="noreferrer">
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
          {features.map((item, index) => (
            <Button key={index} almond text={item} width="auto" background="#A7CE5F" />
          ))}
        </div>
      </div>
      <div className="technologies"></div>
    </Grid>
  );
};

export default Grid4experience;
