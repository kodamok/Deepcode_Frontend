import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const Wrap = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const NavMenu = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  padding: clamp(0.5rem, 0.1rem + 10vw, 1rem);
  /* border:1px solid red; */

  ul {
    display: flex;
    justify-content: space-around;
    max-width: 70%;
    list-style-type: none;
    align-items: baseline;
    /* border:2px solid red; */
    flex-wrap: wrap;
  }

  ul li {
    // border: 2px solid red;
    color: ${({ theme }) => theme.color.green};
    font-family: 'Amatic SC';
    font-size: ${({ theme }) => theme.fontSizeAmatic.ml};
  }

  .nav-box {
    // border: 2px solid red;
    text-align: center;
    max-width: 200px;
    min-width: 150px;
    padding: clamp(0.2rem, 0.1rem + 5vw, 0.5rem);
    line-height: 1.5;
  }

  .logo {
    display: flex;
    align-items: center;
  }
`;

const IconsBox = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoMobile = styled.div`
  position: sticky;
  display: flex;
  align-items: felx-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 0.7rem;
  width: 100%;
  /* border:1px solid red; */
  // border: 2px solid red;
  display: flex;
`;

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 85px;
  background-color: ${({ theme }) => theme.color.cream};
  width: 99.5%;
  height: 100vh;
  margin: 0 auto;
  opacity: 85%;
`;

const MobileMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid red;

  ul {
    // border: 2px solid red;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  li {
    // border: 2px solid red;
    color: ${({ theme }) => theme.color.green};
    font-family: 'Amatic SC';
    font-size: ${({ theme }) => theme.fontSizeAmatic.ml};
  }

  .nav-box {
    // border: 2px solid red;
    text-align: left;
    max-width: 200px;
    min-width: 150px;
    padding: clamp(0.2rem, 0.1rem + 5vw, 0.5rem);
    line-height: 1.5;
  }
`;

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const detectScreen = useMediaQuery('(max-width:720px)');

  const handleOpenMenuMobile = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <Wrap>
      {detectScreen === false ? (
        <NavMenu>
          <div className="logo">
            <Link to="/Deepcode_Frontend">
              <Logo />
            </Link>
          </div>

          <ul>
            <li className="nav-box">
              <Link to="/about" className="link">
                Who am I
              </Link>
            </li>
            <li className="nav-box">
              <Link to="/technologies" className="link">
                Technologies
              </Link>
            </li>
            <li className="nav-box">
              <Link to="/experience" className="link">
                Experience
              </Link>
            </li>
            <li className="nav-box">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li>
              <IconsBox>
                <div>
                  <a
                    href="https://github.com/kodamok?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubSquare size={40} color="#6dbae4" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/david-rabinovich-9000a4110/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={40} color="#6dbae4" />
                  </a>
                </div>
              </IconsBox>
            </li>
          </ul>
        </NavMenu>
      ) : (
        <MobileMenu>
          <LogoMobile onClick={() => handleOpenMenuMobile()}>
            <IconsBox>
              <div>
                <a
                  href="https://github.com/kodamok?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare size={40} color="#6dbae4" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/david-rabinovich-9000a4110/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={40} color="#6dbae4" />
                </a>
              </div>
            </IconsBox>
            <Logo />
          </LogoMobile>

          {mobileMenu && (
            <MobileMenuContainer>
              <ul>
                <li className="nav-box">
                  <Link to="/about" className="link">
                    Who am I
                  </Link>
                </li>
                <li className="nav-box">
                  <Link to="/technologies" className="link">
                    Technologies
                  </Link>
                </li>
                <li className="nav-box">
                  <Link to="/experience" className="link">
                    Experience
                  </Link>
                </li>
                <li className="nav-box">
                  <Link to="/contact" className="link">
                    Contact
                  </Link>
                </li>
              </ul>
            </MobileMenuContainer>
          )}
        </MobileMenu>
      )}
    </Wrap>
  );
};

export default Header;
