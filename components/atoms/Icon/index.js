import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fontSize = ({ width, height }) => {
  const size = width || height;
  return size ? `${size / 16}rem` : '1.25em';
};

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${p => (p.light ? p.theme.palette.white[1] : p.theme.palette.grayscale[0])};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${p => (p.light ? p.theme.palette.white[1] : p.theme.palette.grayscale[0])};
  }
`;

export const Icon = ({ icon, ...props }) => <Wrapper {...props}>{icon}</Wrapper>;

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  light: PropTypes.bool,
};

Icon.defaultProps = {
  width: 0,
  height: 32,
  light: false,
};

export default Icon;
