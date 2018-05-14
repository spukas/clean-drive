import React, { Component } from 'react';
import styled from 'styled-components';

import { LogoImage, Hamburger } from '../../atoms';
import { Navigation } from '../../molecules';

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
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: none;
    ${p =>
      p.vertical &&
      `
      display: block;
      transition: 0.5s ease-in-out;
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
