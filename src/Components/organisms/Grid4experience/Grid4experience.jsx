import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { BsLink45Deg } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
//import { links } from '../../templates/Experience/Experience';

const Grid = styled.div`
  /*
===========================
  GRID LAYOUT LAYOUT
==============================
*/
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.down(theme.breakpoint.sm)} {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
  }

  .logoImg {
    min-width: 175px;
    max-width: 350px;

    /* border: 2px solid red; */
    padding: 0;
    grid-column-start: ${(props) => props.grid.logoImg.columnStart};
    grid-column-end: ${(props) => props.grid.logoImg.columnEnd};
    grid-row-start: ${(props) => props.grid.logoImg.rowStart};
    grid-row-end: ${(props) => props.grid.logoImg.rowEnd};
  }

  .text {
    grid-column-start: ${(props) => props.grid.text.columnStart};
    grid-column-end: ${(props) => props.grid.text.columnEnd};
    grid-row-start: ${(props) => props.grid.text.rowStart};
    grid-row-end: ${(props) => props.grid.text.rowEnd};
    font-family: 'Assistant', sans-serif;
    padding: 0.2rem;

    > p {
      text-align: left;
    }
  }

  .links {
    grid-column-start: ${(props) => props.grid.links.columnStart};
    grid-column-end: ${(props) => props.grid.links.columnEnd};
    grid-row-start: ${(props) => props.grid.links.rowStart};
    grid-row-end: ${(props) => props.grid.links.rowEnd};
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
    grid-column-start: ${(props) => props.grid.desktopPhoto.columnStart};
    grid-column-end: ${(props) => props.grid.desktopPhoto.columnEnd};
    grid-row-start: ${(props) => props.grid.desktopPhoto.rowStart};
    grid-row-end: ${(props) => props.grid.desktopPhoto.rowEnd};
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
    grid-column-start: ${(props) => props.grid.phonePhoto.columnStart};
    grid-column-end: ${(props) => props.grid.phonePhoto.columnEnd};
    grid-row-start: ${(props) => props.grid.phonePhoto.rowStart};
    grid-row-end: ${(props) => props.grid.phonePhoto.rowEnd};
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
    grid-column-start: ${(props) => props.grid.almondButtons.columnStart};
    grid-column-end: ${(props) => props.grid.almondButtons.columnEnd};
    grid-row-start: ${(props) => props.grid.almondButtons.rowStart};
    grid-row-end: ${(props) => props.grid.almondButtons.rowEnd};

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

const Grid4experience = ({
  locationGrid,
  logo,
  landingDesk,
  landingPhone,
  chainLink,
  gitHubLink,
  description,
  features
}) => {
  //const grid = { logoImg: { columnStart: '2', columnEnd: '6', rowStart: '1', rowEnd: '2' } };
  console.log(locationGrid);
  return (
    <Grid grid={locationGrid}>
      <div className="logoImg">
        <img className="logo" src={logo} alt="nomad studio Logo" width="100%" />
      </div>
      <div className="text">
        <p>{description}</p>
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
