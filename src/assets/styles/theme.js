export const theme = {
  color: {
    teal: '#366178',
    background: '#1b313c',
    green: '#A7CE5F',
    Pink: '#EC72C2',
    innerPink: '#944378',
    Brown: '#784D36',
    blue: '#6dbae4',
    white: 'white',
    black: 'black',
    salmon: '#EC7285',
    fluorGreen: '#95B854',
    pastelYellow: '#ECD972',
    orange: '#EC9C72',
    grassGreen: '#7F9C48',
    shadowText: '#58A4AC',
    shadowTitle: '#783661',
    purple: '#6E3678',
    cream: '#eae2b7'
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
