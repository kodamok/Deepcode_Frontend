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

const links = [
  {
    id: 'nomadStudio',
    landingDesk: landingDesk,
    landingPhone: landingPhone,
    logo: nsLogo,
    chainLink: 'https://nomad-studio-netlify.app',
    gitHubLink: 'https://nomad-studio-netlify.app',
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

const Experience = () => {
  return (
    <Wrap>
      <h2>Experience</h2>
      <Grid4experience
        logo={links[0].logo}
        landingDesk={links[0].landingDesk}
        landingPhone={links[0].landingPhone}
        chainLink={links[0].chainLink}
        gitHubLink={links[0].gitHubLink}
        features={links[0].features}
      />
      <Grid4experience
        logo={links[1].logo}
        landingDesk={links[1].landingDesk}
        landingPhone={links[1].landingPhone}
        chainLink={links[1].chainLink}
        gitHubLink={links[1].gitHubLink}
        features={links[1].features}
      />
    </Wrap>
  );
};

export default Experience;
