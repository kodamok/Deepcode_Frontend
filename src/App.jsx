import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import 'sanitize.css/sanitize.css';
import MainContainerApp from './Components/templates/MainContainerApp/MainContainerApp';
import HomePage from './Components/templates/HomePage/HomePage';
import About from './Components/templates/About/About';
import Contact from './Components/templates/Contact/Contact';
import Technologies from './Components/templates/Technologies/Technologies';
import Experience from './Components/templates/Experience/Experience';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainerApp>
        <Routes>
          <Route path="/Deepcode_Frontend" element={<HomePage />} />
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
