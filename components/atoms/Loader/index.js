import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  position: relative;
  border: 0.2em solid
    ${p => (p.reverse ? p.theme.palette.grayscale[5] : p.theme.palette.grayscale[2])};
  border-bottom-color: ${p =>
    p.reverse ? p.theme.palette.grayscale[2] : p.theme.palette.grayscale[5]};
  border-radius: 50%;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${spin} 1s linear infinite;
`;

Loader.propTypes = {
  reverse: PropTypes.bool,
};

Loader.defaultProps = {
  reverse: false,
};

export default Loader;
