import React, { useState } from 'react';
import styled from 'styled-components';

/* const fadeInAnimation = keyframes`
from {
  top: 0
}
to {
  top: -30px
}
`; */

/* const Container = styled.div`
  width: 100%;
  margin: ${({ margin }) => margin || '5px 3%;'};
  height: ${({ height }) => height};
  position: relative;

  label {
    color: ${({ color }) => color || 'black'};
  }

  input {
    width: ${({ width }) => width || '100%'};
    font: 15px/24px 'Open Sans', sans-serif;
    color: black;
    letter-spacing: 1px;
    :focus {
      outline: none;
      border-bottom: 0;
      transition: 1s;
    }
  }

  // border FX

  .effect ~ .focus-border:before,
  .effect ~ .focus-border:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.color.main4};
    transition: 0.2s;
  }

  .effect ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  .effect ~ .focus-border i:before,
  .effect ~ .focus-border i:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${({ theme }) => theme.color.main4};
    transition: 0.5s;
  }
  .effect ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect:focus ~ .focus-border:before,
  .effect:focus ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.2s;
  }
  .effect:focus ~ .focus-border i:before,
  .effect:focus ~ .focus-border i:after {
    top: 0;
    height: 100%;
    transition: 0.2s;
    backgorund-color: black;
  }

  //Background FX

  .effect {
    width: 100%;
    border: 0;
    padding: 7px 15px;
    border-bottom: 2px solid black;
    position: relative;
    backgorund-color: black;
    box-shadow: 0;
  }

  .effect ~ .focus-bg {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 100%;
    transition: 0.6s;
    background-color: red;
    box-shadow: 0px 0px 7.3px rgba(0, 0, 0, 0.024), 0px 0px 13.5px rgba(0, 0, 0, 0.03),
      0px 0px 21px rgba(0, 0, 0, 0.036), 0px 0px 32.3px rgba(0, 0, 0, 0.048),
      0px 0px 62px rgba(0, 0, 0, 0.1);

    z-index: -1;
  }

  .effect:focus ~ .focus-bg {
    box-shadow: 0px 0px 7.3px rgba(0, 0, 0, 0.04), 0px 0px 13.5px rgba(0, 0, 0, 0.05),
      0px 0px 21px rgba(0, 0, 0, 0.061), 0px 0px 32.3px rgba(0, 0, 0, 0.081),
      0px 0px 62px rgba(0, 0, 0, 0.17);

    transition: 0.6s;
    width: 100%;
    left: 0;
  }

  // LETTER FX

  .effect ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: ${(props) => props.inputName === props.label && '-30px'};
    color: ${({ theme }) => theme.color.main3};
    z-index: -1;
    animation: ${fadeInAnimation} 0.2s linear;
    letter-spacing: 0.5px;
  }
  .effect:focus ~ label,
  .has-content.effect ~ label {
    width: 100%;
    font-size: ${(props) => (props.inputName === undefined ? '0' : '20px')};
    top: ${(props) => (props.inputName === undefined ? '0' : '-35px')};
    color: ${({ theme }) => theme.color.main3};
    transition: 0.1s;
  }
`; */

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};

  input {
    background: ${({ theme }) => theme.color.filling};
    border: none;
    font-size: 1.2rem;
    max-width: 500px;
    min-width: 150px;
    letter-spacing: 1px;
    padding: 0.7rem;
    margin: ${({ margin }) => margin || '0 0 1rem 0'};
    border-radius: ${({ borderradius }) => borderradius || '0'};
    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.color.blue};
      outline: none;
      background: white;
    }
  }

  label {
    font-family: 'Assistant', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.color.text};
  }
`;

const ContainerTxtArea = styled.div`
  width: ${({ width }) => width || '100%'};
  textarea {
    font-family: 'Assistant', sans-serif;
    position: relative;
    background: ${({ theme }) => theme.color.filling};
    border: none;
    font-size: 1.2em;
    height: ${({ height }) => height || '100%'};
    transition: border-color 0.3s;
    color: black;
    max-width: 500px;
    min-width: 150px;
    width: 100%;
    letter-spacing: 1px;
    margin-bottom: ${({ margin }) => margin} || '1rem';
    resize: vertical;
    border-radius: ${({ borderradius }) => borderradius || '0'};
    padding: 0.7rem;

    &:focus {
      border-bottom: 2px solid #e76f51;
      outline: none;
      background: white;
    }
  }

  label {
    font-family: 'Assistant', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.color.text};
  }
`;

function Input({
  name,
  type,
  placeholder,
  onChange,
  value,
  required,
  color,
  width,
  height,
  margin,
  multiple,
  border,
  label,
  id,
  textArea,
  rows,
  cols,
  onBlur,
  borderradius
}) {
  const [inputName, setInputName] = useState('undefined');
  const getValue = (e) => {
    const target = e.target.name;
    setInputName(target.charAt(0).toUpperCase() + target.slice(1));
  };

  return (
    <div>
      {textArea ? (
        <div>
          <ContainerTxtArea
            value={value}
            label={label}
            inputName={inputName}
            height={height}
            margin={margin}
            border={border}
            onBlur={onBlur}
            color={color}
            borderradius={borderradius}
            width={width}
          >
            <label htmlFor={id || name}>{label}</label>
            <textarea
              rows={rows}
              cols={cols || 64}
              maxLength={1000}
              minLength={20}
              name={name}
              placeholder={placeholder}
              id={name}
              value={value}
              required={required}
              onChange={onChange}
              wrap="soft"
              autoCapitalize="sentences"
              autoComplete="off"
              borderradius={borderradius}
            />
          </ContainerTxtArea>
        </div>
      ) : (
        <div>
          <ContainerForm
            value={value}
            label={label}
            inputName={inputName}
            height={height}
            margin={margin}
            border={border}
            color={color}
            width={width}
            borderradius={borderradius}
          >
            <label htmlFor={id || name}>{label}</label>
            <input
              className="effect"
              type={type}
              name={name}
              placeholder={placeholder}
              id={name}
              value={value}
              required={required}
              onChange={onChange}
              multiple={multiple}
              onBlur={getValue}
            />
          </ContainerForm>
        </div>
      )}
    </div>
  );
}

export default Input;
