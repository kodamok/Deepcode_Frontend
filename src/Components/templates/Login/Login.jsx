import React from 'react';
import styled from 'styled-components';

const ModalWrap = styled.div`
  position: absolute;
  background: grey;
`;

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <ModalWrap>
      <h1>I am a portal!</h1>,
      <button className="close" onClick={onClose}>
        close
      </button>
    </ModalWrap>
  );
};

export default Login;
