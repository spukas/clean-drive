import React from 'react';
import styled from 'styled-components';

import { LogoImage } from '../../atoms';
import { Navigation } from '../../molecules';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledNavigation = styled(Navigation)`
  @media (max-width: 768px) {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

export const Header = (props) => (
  <StyledHeader {...props}>
    <ImageWrapper>
      <LogoImage />
    </ImageWrapper>
    <StyledNavigation />
  </StyledHeader>
);
