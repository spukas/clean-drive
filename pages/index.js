import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../components/themes';
import { Button } from '../components/atoms';

export default () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Button>Normal</Button>
      <Button color="secondary">Themed</Button>
    </React.Fragment>
  </ThemeProvider>
);
