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
    'We met each other in the DCI 1 year web Developement program. We were all coming from different backgrounds but we all had one goal in common: to finish our program an start working as Web Developers. Throughout the year each one found different challenges but at the same time we somehow intertwined helping each other to be better. After the year we had to deliver a Final Project in less than 2 months. This site is that project.'
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
