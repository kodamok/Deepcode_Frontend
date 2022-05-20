import React from 'react';
import styled from 'styled-components';

const ModalWindow = styled.div`
  background-color: grey;

  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 90vw;
    height: 90vh;
    background: grey;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    height: 50px;
    background: white;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .heading {
    margin: 0;
    padding: 10px;
    color: #2c3e50;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  .modalActions {
    position: absolute;
    bottom: 2px;
    margin-bottom: 10px;
    width: 100vw;
  }

  .actionsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: #2c3e50;
    background: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
  }

  .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }

  .deleteBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #fff;
    background: #ff3e4e;
    transition: all 0.25s ease;
  }

  .deleteBtn:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }

  .cancelBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #2c3e50;
    background: #fcfcfc;
    transition: all 0.25s ease;
  }

  .cancelBtn:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
`;

const Modal = ({ setIsOpen, image }) => {
  return (
    <ModalWindow onClick={() => setIsOpen(false)}>
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <div className="modalActions">
          <div className="actionsContainer">
            <img src={image} width="500px" />
          </div>
        </div>
      </div>
    </ModalWindow>
  );
};

export default Modal;
