import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Link = styled.a`
  font-family: ${p => p.theme.fonts.primary};
  text-decoration: none;
  font-weight: 500;
  color: ${p => (p.light ? p.theme.palette.white[1] : p.theme.palette.grayscale[0])};

  &:hover {
    color: ${p => (p.light ? p.theme.palette.white[2] : p.theme.palette.grayscale[2])};
    cursor: pointer;
  }
`;

Link.propTypes = {
  light: PropTypes.bool,
};

Link.defaultProps = {
  light: false,
};
