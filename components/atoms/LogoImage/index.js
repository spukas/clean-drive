import React from 'react';
import styled from 'styled-components';
import logo from '../../../static/NextJs.svg';

const Img = styled.img`
  height: 80px;
  width: 100px;
  margin: 0 1rem;
`;

export const LogoImage = props => <Img alt="Logo" {...props} src={logo} />;
