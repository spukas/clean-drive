import { css } from 'styled-components';

export const defaultAnimation = css`
  > :nth-child(1) {
    top: 0px;
    transform-origin: left center;
    ${({ active }) =>
      active &&
      `
       transform: rotate(45deg);
       top: -3px;
       left: 8px;
   `};
  }
  > :nth-child(2) {
    top: 18px;
    transform-origin: left center;
    ${({ active }) =>
      active &&
      `
       width: 0%;
       opacity: 0;
   `};
  }
  > :nth-child(3) {
    top: 36px;
    transform-origin: left center;
    ${({ active }) =>
      active &&
      `
     transform: rotate(-45deg);
     top: 39px;
     left: 8px;
   `};
  }
`;

export const secondaryAnimation = css`
  > :nth-child(1) {
    top: 0px;
    ${({ active }) =>
      active &&
      `
      transform: rotate(135deg);
      top: 18px;
   `};
  }
  > :nth-child(2) {
    top: 18px;
    ${({ active }) =>
      active &&
      `
      opacity: 0;
      left: -60px;
   `};
  }
  > :nth-child(3) {
    top: 36px;
    ${({ active }) =>
      active &&
      `
     transform: rotate(-135deg);
     top: 18px;
   `};
  }
`;
