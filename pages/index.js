import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../components/themes';

export default () => (
  <ThemeProvider theme={theme}>
    <React.Fragment />
  </ThemeProvider>
);
