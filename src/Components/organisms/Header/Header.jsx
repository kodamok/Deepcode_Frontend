import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Button from '../../atoms/Button/Button';

/* const floating1 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(2px);
  }
`; */

const floating2 = keyframes`
  0%,
  100% {
    transform: translateY(0);
    transform: translateX(0);
  }

  50% {
    transform: translateY(2px);
    transform: translateX(-2px);
  }
`;

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
  width: 100%;
  padding: clamp(0.5rem, 0.1rem + 2vw, 1.5rem);
  // border-bottom: 1px solid #366178;
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
  max-width: 200px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const LogoMobile = styled.div`
  position: sticky;
  display: flex;
  align-items: felx-end;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.7rem;
  width: 100%;
  /* border:1px solid red; */
  // border: 2px solid red;
`;

/* const MobileMenuContainer = styled.div`
  position: absolute;
  top: 73px;
  background-color: ${({ theme }) => theme.color.background};
  width: 180px;
  right: 20px;
  height: 40vh;
  margin: 0 auto;
  border-radius: 10px 5px 5px 10px;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  border: 2px solid ${({ theme }) => theme.color.stroke};
  z-index: 100;

  animation-name: ${floating1};
  animation-duration: 2s;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: 0.1s;
`; */

const MobileMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 1px solid red;

  border-bottom: 1px solid #366178;

  ul {
    // border: 2px solid red;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem;
  }

  li {
    // border: 2px solid red;
    color: ${({ theme }) => theme.color.green};
    font-family: 'Amatic SC';
    font-size: ${({ theme }) => theme.fontSizeAmatic.ml};

    animation-name: ${floating2};
    animation-duration: 2s;
    animation-direction: reverse;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-delay: 0.4s;
  }

  .nav-box {
    // border: 2px solid red;
    text-align: right;
    max-width: 200px;
    min-width: 150px;
    padding: clamp(0.2rem, 0.1rem + 5vw, 0.5rem);
    line-height: 1.5;
  }
`;

/* const mobileDropMenu = [
  {
    id: 1,
    name: 'Who am I',
    path: '/about'
  },
  {
    id: 2,
    name: 'Technologies',
    path: '/technologies'
  },
  {
    id: 3,
    name: 'Experience',
    path: '/experience'
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact'
  }
]; */

const Header = ({ themeSwitch, isLightTheme }) => {
  // MOBILE MENU SWITCH
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpenMenuMobile = () => {
    setMobileMenu((prev) => !prev);
  };

  //DETECT SCREEN TO CHANGE BETWEEN NAV BARS
  const detectScreen = useMediaQuery('(max-width:720px)');

  // FUNCTIONALITY FOR CLICKING OUTSIDE AND CLOSE MOBILE MENU
  const ref = useRef(null);
  useOnClickOutside(ref, () => setMobileMenu(false));

  return (
    <Wrap>
      {detectScreen === false ? (
        <NavMenu>
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul>
            {/* <li className="nav-box">
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
            </li> */}

            <li>
              <IconsBox>
                <div>
                  <a
                    href="https://github.com/kodamok?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubSquare size={40} />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/david-rabinovich-9000a4110/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
                <div>
                  <Button
                    text={isLightTheme === true ? 'Dark' : 'Light'}
                    onClick={themeSwitch}
                    height="35px"
                    width="70px"
                  />
                </div>
              </IconsBox>
            </li>
          </ul>
        </NavMenu>
      ) : (
        <MobileMenu>
          <LogoMobile>
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
              <div>
                <Button
                  text={isLightTheme === true ? 'Dark' : 'Light'}
                  onClick={themeSwitch}
                  height="35px"
                  width="70px"
                />
              </div>
            </IconsBox>
            <div onClick={() => handleOpenMenuMobile()}>
              <Logo />
            </div>
          </LogoMobile>

          {mobileMenu &&
            {
              /* <MobileMenuContainer ref={ref}>
              <ul>
                {mobileDropMenu.map((item) => (
                  <li className="nav-box" key={item.id}>
                    <Link to={item.path} className="link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileMenuContainer> */
            }}
        </MobileMenu>
      )}
    </Wrap>
  );
};

export default Header;
