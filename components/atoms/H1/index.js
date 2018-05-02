import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const lightStyles = css`
    color: ${p => p.theme.palette.white[1]}
`

export const H1 = styled.h1`
  font-family: ${p => p.theme.fonts.primary};
  font-size: 2em;
  margin-bottom: 0.25em;
  color: ${p =>  p.color || p.theme.palette.grayscale[0]}
  ${p => p.light && lightStyles}
`;

H1.propTypes = {
  light: PropTypes.bool,
  color: PropTypes.string,
};

H1.defaultProps = {
    light: false,
    color: '',
};
