import React from 'react';
import styled from 'styled-components';
import { Atom, Block } from '../';
import { defaultAnimation, secondaryAnimation } from './animations';

const StyledAtom = styled(Atom)`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: ${p => p.theme.palette.grayscale[0]};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

const StyledBlock = styled(Block)`
  width: 40px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  ${p => (p.secondary ? secondaryAnimation : defaultAnimation)};
`;

export const Hamburger = props => (
  <StyledBlock {...props}>
    <StyledAtom />
    <StyledAtom />
    <StyledAtom />
  </StyledBlock>
);
