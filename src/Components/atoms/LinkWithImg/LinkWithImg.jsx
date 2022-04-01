import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(0.5rem, 0.2rem + 5vw, 1rem);

  h4 {
    font-size: clamp(1.5rem, 0.5rem + 15vw, 3.375rem);
    color: ${({ theme }) => theme.color.teal};
    displax: flex;
    flex-wrap: wrap;
    line-height: 1;
    text-align: center;
    margin: 0.2rem;
    width: 100%;
  }
`;

const LinkWithImg = ({ href, imgSrc, alt, imgWidth, underTitle }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Img>
        <img src={imgSrc} alt={alt} width={imgWidth} />
        <div>
          <h4>{underTitle}</h4>
        </div>
      </Img>
    </a>
  );
};

export default LinkWithImg;
