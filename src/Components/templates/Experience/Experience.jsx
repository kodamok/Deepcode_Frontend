import React from 'react';
import styled from 'styled-components';
import Grid4experience from '../../organisms/Grid4experience/Grid4experience';
import nsLogo from '../../../assets/png/nomadStudio/nsLogo.png';
import landingDesk from '../../../assets/png/nomadStudio/landingDesk.png';
import landingPhone from '../../../assets/png/nomadStudio/landingPhone.png';
import maynoothLogo from '../../../assets/png/Maynooth/maynoothLogo.png';
import maynoothDesk from '../../../assets/png/Maynooth/maynoothDesk.jpg';
import maynoothPhone from '../../../assets/png/Maynooth/maynoothPhone.jpg';

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

const locationGrid = [
  {
    left: {
      logoImg: {
        columnStart: '2',
        columnEnd: '6',
        rowStart: '1',
        rowEnd: '2'
      },
      text: {
        columnStart: '2',
        columnEnd: '7',
        rowStart: '2',
        rowEnd: '3'
      },
      links: {
        columnStart: '6',
        columnEnd: '7',
        rowStart: '1',
        rowEnd: '2'
      },
      desktopPhoto: {
        columnStart: '10',
        columnEnd: '16',
        rowStart: '2',
        rowEnd: '12'
      },
      phonePhoto: {
        columnStart: '8',
        columnEnd: '10',
        rowStart: '2',
        rowEnd: '12'
      },
      almondButtons: {
        columnStart: '2',
        columnEnd: '7',
        rowStart: '5',
        rowEnd: '16'
      }
    }
  },
  {
    right: {
      logoImg: {
        columnStart: '10',
        columnEnd: '16',
        rowStart: '1',
        rowEnd: '2'
      },
      text: {
        columnStart: '10',
        columnEnd: '15',
        rowStart: '2',
        rowEnd: '3'
      },
      links: {
        columnStart: '15',
        columnEnd: '17',
        rowStart: '1',
        rowEnd: '2'
      },
      desktopPhoto: {
        columnStart: '4',
        columnEnd: '10',
        rowStart: '2',
        rowEnd: '12'
      },
      phonePhoto: {
        columnStart: '2',
        columnEnd: '4',
        rowStart: '2',
        rowEnd: '12'
      },
      almondButtons: {
        columnStart: '10',
        columnEnd: '16',
        rowStart: '5',
        rowEnd: '16'
      }
    }
  }
];

const Experience = () => {
  const links = [
    {
      id: 'nomadStudio',
      landingDesk: landingDesk,
      landingPhone: landingPhone,
      logo: nsLogo,
      chainLink: 'https://nomad-studio-netlify.app',
      gitHubLink: 'https://nomad-studio-netlify.app',
      description:
        // eslint-disable-next-line max-len
        'Final project of the MERN full-stack web development program at Digital Career Institute gGmbh. I was responsible of the UX Design, logo design and Front End side of the project.  The project is directed to the micro-management of projects, helping to create a clean workflow between customers and uprising creative freelancers.',
      features: [
        'Login',
        'Signup',
        'Projects Manager',
        'Contact Book',
        'File Transfer',
        'PDF Invoice Download',
        'chatBox',
        'Multilanguage',
        'PWA Tecgnology',
        'React',
        'AdobeXD',
        'Styled Components'
      ]
    },
    {
      id: 'maynooth',
      landingDesk: maynoothDesk,
      landingPhone: maynoothPhone,
      logo: maynoothLogo,
      chainLink: undefined,
      gitHubLink: undefined,
      features: ['AdobeXD', 'Logo Design', 'UX/UI Design']
    }
  ];
  //const grid = { logoImg: { columnStart: '2', columnEnd: '6', rowStart: '1', rowEnd: '2' } };
  return (
    <Wrap>
      <h2>Experience</h2>
      <Grid4experience
        logo={links[0].logo}
        landingDesk={links[0].landingDesk}
        landingPhone={links[0].landingPhone}
        chainLink={links[0].chainLink}
        gitHubLink={links[0].gitHubLink}
        description={links[0].description}
        features={links[0].features}
        locationGrid={locationGrid[0].left}

        //gridLocation is where the content is located within the grid
      />
      <Grid4experience
        logo={links[1].logo}
        landingDesk={links[1].landingDesk}
        landingPhone={links[1].landingPhone}
        chainLink={links[1].chainLink}
        gitHubLink={links[1].gitHubLink}
        description={links[0].description}
        features={links[1].features}
        locationGrid={locationGrid[1].right}

        //gridLocation is where the content is located within the grid
      />
    </Wrap>
  );
};

export default Experience;
