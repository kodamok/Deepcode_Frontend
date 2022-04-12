export const lightTheme = {
  color: {
    circleBack: '#ECD972',
    background: '#eae2b7',
    sunball: '#A7CE5F',
    link: '#1b313c',
    hover: '#EC7285',
    border: '#6dbae4',
    title: '#6dbae4',
    blue: '#6dbae4',
    text: 'black',
    stroke: 'black',
    shadowBall: '#58A4AC',
    color1: '#783661',
    color2: '#6E3678',
    color3: '#784D36',
    color4: '#944378',
    color5: '#EC72C2',
    color7: '#7F9C48',
    puk: '#95B854',
    filling: '#EC9C72'
  },
  fontSizeBarrio: {
    xxl: '7.594rem',
    xl: '5.063rem',
    l: '3.375rem',
    ml: '2.25rem',
    m: '1.5rem',
    ms: '1.333rem',
    s: '1rem'
  },
  fontSizeAssistant: {
    xxl: '2.488rem',
    xl: '2.074rem',
    l: '1.728rem',
    ml: '1.44rem',
    m: '1.2rem',
    ms: '1rem',
    xs: '0.833rem',
    xxs: '0.694rem',
    xxxs: '0.5793rem'
  },

  fontSizeAmatic: {
    xxl: '7.594rem',
    xl: '5.063rem',
    l: '3.375rem',
    ml: '2.25rem',
    m: '1.5rem',
    ms: '1.333rem',
    s: '1rem'
  },
  breakpoint: {
    s: '440px',
    sm: '720px',
    m: '1060px',
    l: '1440px'
  },
  boxShadow: {
    mainShadow: `0px 0px 2.2px rgba(0, 0, 0, 0.019),
  0px 0px 4.8px rgba(0, 0, 0, 0.028),
  0px 0px 8.1px rgba(0, 0, 0, 0.034),
  0px 0px 12.2px rgba(0, 0, 0, 0.04),
  0px 0px 17.7px rgba(0, 0, 0, 0.045),
  0px 0px 25px rgba(0, 0, 0, 0.05),
  0px 0px 35.4px rgba(0, 0, 0, 0.056),
  0px 0px 51.5px rgba(0, 0, 0, 0.062),
  0px 0px 79.3px rgba(0, 0, 0, 0.071),
  0px 0px 141px rgba(0, 0, 0, 0.09)`
  },
  up: (breakpoint) => `@media (min-width: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint) => `@media (max-width: ${breakpoint})`,
  between: (breakpoint, breakpoint2) =>
    `@media (min-width: calc(${breakpoint} + 0.02px)) and (max-width: ${breakpoint2})`
};

export const darkTheme = {
  color: {
    circleBack: '#366178',
    background: '#1b313c',
    sunball: '#58A4AC',
    link: '#eae2b7',
    hover: '#EC72C2',
    border: '#EC72C2',
    title: '#EC72C2',
    blue: '#6dbae4',
    text: 'white',
    stroke: 'black',
    shadowBall: '#95B854',
    color1: '#7F9C48',
    color2: '#A7CE5F',
    color3: '#ECD972',
    color4: '#EC9C72',
    color5: '#EC7285',
    bla: '#944378',
    sdf: '#784D36',
    filling: '#58A4AC',
    asf: '#6E3678'
  },
  fontSizeBarrio: {
    xxl: '7.594rem',
    xl: '5.063rem',
    l: '3.375rem',
    ml: '2.25rem',
    m: '1.5rem',
    ms: '1.333rem',
    s: '1rem'
  },
  fontSizeAssistant: {
    xxl: '2.488rem',
    xl: '2.074rem',
    l: '1.728rem',
    ml: '1.44rem',
    m: '1.2rem',
    ms: '1rem',
    xs: '0.833rem',
    xxs: '0.694rem',
    xxxs: '0.5793rem'
  },

  fontSizeAmatic: {
    xxl: '7.594rem',
    xl: '5.063rem',
    l: '3.375rem',
    ml: '2.25rem',
    m: '1.5rem',
    ms: '1.333rem',
    s: '1rem'
  },
  breakpoint: {
    s: '440px',
    sm: '720px',
    m: '1060px',
    l: '1440px'
  },
  boxShadow: {
    mainShadow: `0px 0px 2.2px rgba(0, 0, 0, 0.019),
  0px 0px 4.8px rgba(0, 0, 0, 0.028),
  0px 0px 8.1px rgba(0, 0, 0, 0.034),
  0px 0px 12.2px rgba(0, 0, 0, 0.04),
  0px 0px 17.7px rgba(0, 0, 0, 0.045),
  0px 0px 25px rgba(0, 0, 0, 0.05),
  0px 0px 35.4px rgba(0, 0, 0, 0.056),
  0px 0px 51.5px rgba(0, 0, 0, 0.062),
  0px 0px 79.3px rgba(0, 0, 0, 0.071),
  0px 0px 141px rgba(0, 0, 0, 0.09)`
  },
  up: (breakpoint) => `@media (min-width: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint) => `@media (max-width: ${breakpoint})`,
  between: (breakpoint, breakpoint2) =>
    `@media (min-width: calc(${breakpoint} + 0.02px)) and (max-width: ${breakpoint2})`
};
