import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const lightStyles = css`
  color: ${p => p.theme.palette.white[1]};
`;

export const H2 = styled.h2`
  font-family: ${p => p.theme.fonts.primary};
  font-size: 1.5em;
  color: ${p => p.color || p.theme.palette.grayscale[0]} ${p => p.light && lightStyles};
`;

H2.propTypes = {
  light: PropTypes.bool,
  color: PropTypes.string,
};

H2.defaultProps = {
  light: false,
  color: '',
};
