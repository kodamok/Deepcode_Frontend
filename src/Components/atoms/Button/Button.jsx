import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding || '0.5rem'};
  background: ${({ theme, background }) => background || theme.color.teal};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizeAssistant.ms};
  border-radius: 0.6rem;
  color: ${({ theme, color }) => color || theme.color.teal};
  border: ${({ border }) => border || '1px solid black'};
  outline: none;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '50px'};
  font-weight: 600;
  //white-space: nowrap;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.salmon};
    color: ${({ theme }) => theme.color.background};
    box-shadow: 0.5px 0.7px 1.4px rgba(0, 0, 0, 0.018), 1.1px 1.5px 3.1px rgba(0, 0, 0, 0.026),
      1.8px 2.5px 5.3px rgba(0, 0, 0, 0.032), 2.8px 3.9px 8.2px rgba(0, 0, 0, 0.038),
      4.1px 5.8px 12.2px rgba(0, 0, 0, 0.042), 6px 8.5px 17.9px rgba(0, 0, 0, 0.048),
      9px 12.7px 26.8px rgba(0, 0, 0, 0.054), 14.4px 20.3px 42.7px rgba(0, 0, 0, 0.062),
      27px 38px 80px rgba(0, 0, 0, 0.08);
    transition: background 0.2s ease-in;
  }
  svg {
    margin-right: 1rem;
  }
`;

const ButtonWhiteStyle = styled.button`
  padding: 0.5rem;
  background: ${({ theme }) => theme.color.teal};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizeAssistant.m};
  border-radius: 0.6rem;
  color: ${({ color }) => color || 'black'};
  border: ${({ border }) => border || 'none'};
  outline: none;
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height};
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  > span {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizeAssistant.xs};
  }
  //white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: white;
    background: black;
  }
`;

const ButtonDrop = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ background }) => background || '#001523'};
  color: ${({ color }) => color || 'black'};
  border: ${({ border }) => border || 'black'};
  outline: none;
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height};
  transition: 0.3s ease-in-out;
  & > span {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizeAssistant.ms};
  }

  //white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.blue};
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
  whiteMenu,
  children,
  dropMenu
}) {
  return (
    <div>
      {whiteMenu ? (
        <ButtonWhiteStyle
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
          {children}
          {icon && <span>{icon}</span>}
          <span>{text}</span>
        </ButtonWhiteStyle>
      ) : dropMenu ? (
        <ButtonDrop
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
          {children}
          <span>{text}</span>
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
