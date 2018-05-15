import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { LogoImage, Hamburger } from '../../atoms';
import { Navigation } from '../../molecules';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30%); 
  }   
    
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNavigation = styled(Navigation)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    ${p =>
      p.vertical &&
      `
      display: block;
      grid-column: 1 / 3;
      animation: ${slideDown} 0.5s ease-out
    `};
  }
`;

const StyledBurger = styled(Hamburger)`
  @media (min-width: 768px) {
    display: none;
  }
  justify-self: end;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

export class Header extends Component {
  state = { menuActive: false };

  handleBurgerClick = () => this.setState(prevState => ({ menuActive: !prevState.menuActive }));

  render() {
    const { menuActive } = this.state;

    return (
      <HeaderWrapper {...this.props}>
        <ImageWrapper>
          <LogoImage />
        </ImageWrapper>
        <StyledBurger secondary active={menuActive} onClick={this.handleBurgerClick} />
        <StyledNavigation vertical={menuActive} />
      </HeaderWrapper>
    );
  }
}
