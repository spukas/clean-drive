import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const gradient = color => css`
  background-image: radial-gradient(
    circle,
    ${color} 1%,
    ${color} 15%,
    rgba(0, 0, 0, 0) 30%
  );
  background-color: ${color};
`;

const floatStyles = css`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  ${gradient(p => p.theme.palette.primary[0])}
  will-change: box-shadow, background-color;
  font-size: 22px;
  padding: 0;
  color: ${p => p.theme.palette.white[0]}
  &:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16), 0 4px 15px 0 rgba(0, 0, 0, 0.13);
    background-color: ${p => p.theme.palette.primary[2]};
  }
`;

const raisedStyles = css`
  border-radius: calc(3px * 0.66);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  ${gradient(p => p.theme.palette.primary[0])};
  will-change: box-shadow, background-color;
  color: white;
  &:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.16), 0 4px 15px 0 rgba(0, 0, 0, 0.13);
    background-color: ${p => p.theme.palette.primary[2]};
  }
`;

const flatStyles = css`
  ${gradient(p => p.theme.palette.primary[0])}
  background-color: white;
  box-shadow: none;
`;

const styles = css`
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  background-image: none;
  background-size: 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: background-color 0.3s cubic-bezier(0.64, 0.09, 0.08, 1),
    box-shadow 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  will-change: background-size, background-image;
  padding: 10px 20px;
  display: inline-block;
  font-family: ${p => p.theme.fonts.primary};
  border: 0;
  &:after {
    position: absolute;
    content: '';
    transition: none;
    background: radial-gradient(circle, white 95%, rgba(0, 0, 0, 0) 95%);
    background-size: 0.7%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  };
  &:focus {
    outline: none;
    background-size: 1000%;
    transition: all 1s cubic-bezier(0.64, 0.09, 0.08, 1);
  };

  ${props => props.float && floatStyles};
  ${props => props.raised && raisedStyles};
  ${props => props.flat && flatStyles};
`;

const StyledButton = styled.button`
  ${styles};
`;

const Button = ({ type, ...props }) => <StyledButton {...props} type={type} />;

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export { Button };
