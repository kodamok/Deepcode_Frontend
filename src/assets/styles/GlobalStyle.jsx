import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  
  
  #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
  }

  

html {
  font-size: 100%;
}

/*16px*/

body {
  background-color: #f3f0d3;
  font-family: 'Amatic SC', cursive;
  font-family: 'Assistant', sans-serif;
  font-family: 'Barrio', cursive;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  line-height: 1.45;
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Barrio', cursive;
  font-weight: 400;
  line-height: 1.3;
}


a{
  text-decoration: none;
  color:black;
  font-weight: 900;
;
  :hover{
    color : #6dbae4;
  }
}

ul, li {
  margin:0;
  padding:0;
  }


.h0 {
  font-size: 11.391rem;
}

h1 {
  margin-top: 0;
  font-size: 7.594rem;
}

h2 {
  font-size: 5.063rem;
}

h3 {
  font-size: 3.375rem;
}

h4 {
  font-size: 2.25rem;
}

h5 {
  font-size: 1.5rem;
}

p{
  font-size: 1.2rem;
  font-weight: bold;
  text-align: justify;
}

small,
.text_small {
  font-size: 0.667rem;
}
  
  
  button, label{
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  input, select{
    font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
`;
