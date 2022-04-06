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
    line-height: 1;
    font-family: 'Amatic SC', cursive;
    font-size: clamp(1.5rem, 0.5rem + 15vw, 5.063rem);
    font-weight: 900;
    color: ${({ theme }) => theme.color.teal};
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
  /* const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileFilter, setMobileFilter] = useState(true);
  console.log(windowWidth, mobileFilter);
  // OBSERVE WINDOW WIDTH

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };
    if (windowWidth < 440) {
      setMobileFilter(false);
    }

    if (windowWidth > 440) {
      setMobileFilter(true);
    }
    window.addEventListener('resize', updateWindowWidth);
  }, [windowWidth]);

  const showDescription = (e) => {
    let p = document.createElement('p');

    p.setAttribute('id', 'hover'); //<p id="hover"></p>
    p.style.width = `calc(${windowWidth}  / 100vw)`;
    p.style.position = 'absolute';
    p.style.top = '0px';
    p.style.left = '0px';
    p.style.padding = '1rem';
    p.style.color = '#eae2b7';
    p.style.boxShadow =
      // eslint-disable-next-line max-len
      '0px 0px 2.2px rgba(0, 0, 0, 0.019), 
      0px 0px 4.8px rgba(0, 0, 0, 0.028),
      0px 0px 8.1px rgba(0, 0, 0, 0.034), 
      0px 0px 12.2px rgba(0, 0, 0, 0.04), 
      0px 0px 17.7px rgba(0, 0, 0, 0.045), 
      0px 0px 25px rgba(0, 0, 0, 0.05), 
      0px 0px 35.4px rgba(0, 0, 0, 0.056), 
      0px 0px 51.5px rgba(0, 0, 0, 0.062), 
      0px 0px 79.3px rgba(0, 0, 0, 0.071), 
      0px 0px 141px rgba(0, 0, 0, 0.09)';
    p.style.fontFamily = 'Assistant, sans-serif';
    p.style.visibility = 'visible';
    p.style.backgroundColor = '#366178';
    p.style.opacity = '90%';
    p.style.border = '2px solid black';
    p.style.borderRadius = '10px';
    p.style.zIndex = '500';
    p.innerText = linkWithImgInfo.description;
    e.target.appendChild(p);

    p.addEventListener('mouseleave', () => {
      p.style.visibility = 'hidden';
    });
  }; */

  //useHover needs to be a child of a position: relative parent
  //Add the text on the useHover(text) and watch it work and resize

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
