import styled, { keyframes } from 'styled-components';

const glow = keyframes` 
0% {
  box-shadow: 0px 0px 0px 0.5px #6dbae4, 
  0px 0px 10px 1px #ECD972;
}

25% {
  box-shadow: 0px 0px 10px 1px #6dbae4, 
  0px 0px 15px 1px #A7CE5F;
}

50% {
  box-shadow: 0px 0px 20px 2px #6dbae4, 
  0px 0px 20px 1px #ECD972;
}

75% {
  box-shadow: 0px 0px 10px 1px #6dbae4, 
  0px 0px 15px 1px #A7CE5F,
    /* 0px 0px 55px 35px #ECD972(0, 0, 0, 0.288) */;
}

100% {
  box-shadow: 
  0px 0px 0px 0.5px #6dbae4, 
  0px 0px 10px 1px #ECD972,
    /* 0px 0px 55px 35px #ECD972(0, 0, 0, 0.288) */;
}
`;

export const CircleSign = styled.div`
  display: flex;
  justify-content: center;
  width: 330px;
  background-color: ${({ theme }) => theme.color.circleBack};
  border: ${({ border }) => border || '2px solid black'};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 0.3rem;
  box-shadow: 0px 0px 50px 1px #6dbae4, 0px 0px 50px 20px #ec7285;
  z-index: 0;
  animation-name: ${glow};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;

  /* width: clamp(200px, 50vw, 400px);
height: clamp(200px, 50vw, 400px); */
`;

export const TitleSign = styled.div`
  position: relative;
  display: block;
  font-size: clamp(${(theme) => theme.fontSizeInter.s}, 12vw, ${(theme) => theme.fontSizeInter.l});
  font-family: 'Amatic SC';
  color: ${(theme) => theme.color.blue};
  -webkit-text-stroke: 1px black;
  line-height: 0.9;
  text-align: center;
  text-shadow: -12px 6px 5px ${(theme) => theme.color.shadowTitle};
  z-index: 2;

  span {
    display: block;
    font-size: clamp(
      ${(theme) => theme.fontSizeInter.s},
      12vw,
      ${(theme) => theme.fontSizeInter.l}
    );
    color: white;
    text-shadow: -10px 6px 9px #366178;
  }
`;
