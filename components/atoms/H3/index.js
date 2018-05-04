import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const lightStyles = css`
  color: ${p => p.theme.palette.white[1]};
`;

export const H3 = styled.h3`
  font-family: ${p => p.theme.fonts.primary};
  color: ${p => p.color || p.theme.palette.grayscale[0]} ${p => p.light && lightStyles};
`;

H3.propTypes = {
  light: PropTypes.bool,
  color: PropTypes.string,
};

H3.defaultProps = {
  light: false,
  color: '',
};
