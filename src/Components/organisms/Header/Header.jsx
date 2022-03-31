import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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
  /* border:1px solid red; */

  ul {
    display: flex;
    justify-content: center;
    width: 45%;
    list-style-type: none;
    align-items: baseline;
    /* border:2px solid red; */
    flex-wrap: wrap;

    .icon-box {
      padding: 0.5rem;
      // border: 2px solid red;
      max-width: 150px;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
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
    min-width: 150px;
    line-height: 1.5;
  }
`;

const LogoMobile = styled.div`
  position: sticky;
  display: flex;
  align-items: felx-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  /* border:1px solid red; */
  // border: 2px solid red;
  display: flex;
`;

const Header = () => {
  const [showHide, setShowHide] = useState(false);
  const detectScreen = useMediaQuery('(max-width:440px)');

  useEffect(() => {
    if (detectScreen === true) {
      setShowHide(true);
    }

    if (detectScreen === false) {
      setShowHide(false);
    }
  }, [detectScreen]);
  return (
    <Wrap>
      {showHide === true ? (
        <LogoMobile>
          <Logo />
        </LogoMobile>
      ) : (
        <NavMenu>
          <Link to="/">
            <Logo />
          </Link>

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
            <li className="icon-box">
              <a
                href="https://github.com/kodamok?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FaGithubSquare size={40} />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/david-rabinovich-9000a4110/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FaLinkedin size={40} />
                </div>
              </a>
            </li>
          </ul>
        </NavMenu>
      )}
    </Wrap>
  );
};

export default Header;
