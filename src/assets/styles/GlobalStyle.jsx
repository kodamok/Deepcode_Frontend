import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
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
  scroll-behavior: smooth;

}

/*16px*/

body {
  background-color: ${({ theme }) => theme.color.background};
  font-family: 'Amatic SC', cursive;
  font-family: 'Assistant', sans-serif;
  font-family: 'Barrio', cursive;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  line-height: 1.45;
  
}

p {
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.text};
  font-family: 'Assistant', sans-serif;
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
  color:${({ theme }) => theme.color.link};
  font-weight: 900;
;
  :hover{
    color : ${({ theme }) => theme.color.hover};
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
  font-size: clamp(1rem, 0.5rem + 8vw, 5.063rem);
}

h3 {
  font-size: clamp(1rem, 0.5rem + 8vw, 3.375rem);
}

h4 {
  font-size: clamp(1rem, 0.5rem + 8vw, 2.25rem);
}

h5 {
  font-size: 1.5rem;
}

p{
  font-size: clamp(0.667rem, 0.5rem + 2vw, 1.2rem);  
  font-weight: bold;
  text-align: left;
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
