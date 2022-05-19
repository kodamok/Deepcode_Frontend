import React from 'react';
import styled from 'styled-components';
import NSx512 from '../../../assets/png/NSx512.png';
import useHover from '../../../hooks/useHover';
import LinkWithImg from '../../atoms/LinkWithImg/LinkWithImg';

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

const Container = styled.div`
  max-width: 500px;
  min-width: 250px;
  position: relative;
  // border: 2px solid red;
`;

const linkWithImgInfo = {
  href: 'https://nomad-studio.netlify.app/',
  imgSrc: NSx512,
  alt: 'NomadStudio',
  imgWidth: '215px',
  underTitle: 'Nomad Studio',
  description:
    // eslint-disable-next-line max-len
    'Final project of the MERN full-stack web development program at Digital Career Institute gGmbh. I was responsible of the UX Design, logo design and Front End side of the project.  The project is directed to the micro-management of projects, helping to create a clean workflow between customers and uprising creative freelancers.'
};

const Experience = () => {
  const { createHover } = useHover(linkWithImgInfo.description);
  return (
    <Wrap>
      <h2>Experience</h2>
      <Container onMouseEnter={createHover}>
        <LinkWithImg
          href={linkWithImgInfo.href}
          imgSrc={linkWithImgInfo.imgSrc}
          alt={linkWithImgInfo.alt}
          imgWidth={linkWithImgInfo.imgWidth}
          underTitle={linkWithImgInfo.underTitle}
        />
      </Container>
    </Wrap>
  );
};

export default Experience;
