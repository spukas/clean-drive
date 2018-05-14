import { css } from 'styled-components';

export const defaultAnimation = css`
  > :nth-child(1) {
    top: 0px;
    transform-origin: left center;
    ${({ active }) =>
      active &&
      `
       transform: rotate(45deg);
       top: 0;
       left: 6px;
   `};
  }
  > :nth-child(2) {
    top: 12px;
    transform-origin: left center;
    ${({ active }) =>
      active &&
      `
       width: 0%;
       opacity: 0;
   `};
  }
  > :nth-child(3) {
    top: 24px;
    transform-origin: left center;
    ${({ active }) =>
      active &&
      `
     transform: rotate(-45deg);
     top: 28px;
     left: 6px;
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
      top: 14px;
   `};
  }
  > :nth-child(2) {
    top: 12px;
    ${({ active }) =>
      active &&
      `
      opacity: 0;
      left: -60px;
   `};
  }
  > :nth-child(3) {
    top: 24px;
    ${({ active }) =>
      active &&
      `
     transform: rotate(-135deg);
     top: 14px;
   `};
  }
`;
