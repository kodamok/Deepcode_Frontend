import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { lightTheme, darkTheme } from './assets/styles/theme';
//import { HashLink as Link } from 'react-router-hash-link';
import 'sanitize.css/sanitize.css';
import MainContainerApp from './Components/templates/MainContainerApp/MainContainerApp';
import HomePage from './Components/templates/HomePage/HomePage';
import About from './Components/templates/About/About';
import Contact from './Components/templates/Contact/Contact';
import Technologies from './Components/templates/Technologies/Technologies';
import Experience from './Components/templates/Experience/Experience';

const App = () => {
  let [isLightTheme, toggleTheme] = useState(true);

  const themeSwitch = () => {
    toggleTheme((isLightTheme = !isLightTheme));
  };

  return (
    <ThemeProvider theme={!isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MainContainerApp themeSwitch={themeSwitch} isLightTheme={isLightTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContainerApp>
    </ThemeProvider>
  );
};

export default App;
