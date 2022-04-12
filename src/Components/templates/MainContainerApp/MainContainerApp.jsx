import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
/* import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage'; */

const MainWrap = styled.div`
  .headerWrap {
    position: relative;
    left: 0;
    top: 0;
  }
  .footer--pin {
    position: relative;
    left: 0;
    bottom: 0;
  }

  .content {
    // border: 2px solid green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: calc(100vh - 90px);
  }
`;

/* import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage';
 */
// Component which provide Header to Each Page

const MainContainerApp = ({ children, themeSwitch, isLightTheme }) => {
  /*  const [myError] = useState({
    message: 'This is an Error',
    success: false,
    successMessage: 'You made it!'
  }); */
  return (
    <MainWrap>
      {/* {(myError.message || myError.successMessage) && (
        <ErrorMessage
          message={myError.message === '1' ? undefined : myError.message}
          success={myError.success}
          successMessage={myError.successMessage === '1' ? undefined : myError.successMessage}
        />
      )}{' '} */}
      <div className="headerWrap">
        <Header themeSwitch={themeSwitch} isLightTheme={isLightTheme} />
      </div>
      <div className="content">{children}</div>
      <div className="footer--pin">
        <Footer year1="20" year2="22" />
      </div>
    </MainWrap>
  );
};

export default MainContainerApp;
