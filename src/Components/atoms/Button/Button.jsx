import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding || '0.5rem'};
  background: ${({ theme }) => theme.color.filling};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizeAssistant.ms};
  border-radius: 0.6rem;
  color: ${({ theme, color }) => color || theme.color.teal};
  border: ${({ border }) => border || '2px solid black'};
  outline: none;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '50px'};
  font-weight: 600;
  //white-space: nowrap;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.hover};
    color: ${({ theme }) => theme.color.background};
    transition: background 0.2s ease-in;
  }
  svg {
    margin-right: 1rem;
  }
`;

const ButtonDrop = styled.div`
  border: 2px solid red;

  .toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
    background-color: red;
    border-radius: 30px;
    border: 2px solid gray;

    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: blue;
      top: 3px;
      left: 1px;
      transition: all 0.5s;
    }
  }

  .checkBox:checked + .toggle::after {
    left: 25px;
  }

  .checkBox:checked + .toggle {
    background-color: green;
  }

  .checkBox {
    display: none;
  }
`;

function Button({
  text,
  color,
  background,
  type,
  border,
  onClick,
  icon,
  width,
  height,
  padding,
  fontSize,
  style,
  toggle
}) {
  return (
    <div>
      {toggle ? (
        <ButtonDrop
          color={color}
          background={background}
          border={border}
          onClick={onClick}
          style={style}
          width={width}
          height={height}
          padding={padding}
          fontSize={fontSize}
        >
          <input className="checkBox" id="switch" type="checkbox" />
          <label htmlFor="switch" className="toggle"></label>
        </ButtonDrop>
      ) : (
        <ButtonStyle
          type={type}
          color={color}
          background={background}
          border={border}
          onClick={onClick}
          style={style}
          width={width}
          height={height}
          padding={padding}
          fontSize={fontSize}
        >
          {icon && <span>{icon}</span>}
          <span>{text}</span>
        </ButtonStyle>
      )}
    </div>
  );
}

export default Button;
