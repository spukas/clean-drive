import styled from 'styled-components';

export const Link = styled.a`
  font-family: ${p => p.theme.fonts.primary};
  text-decoration: none;
  font-weight: 500;
  color: ${p => p.theme.palette.grayscale[0]}


  &:hover {
    color: ${p => p.theme.palette.grayscale[3]}
  }
`;

