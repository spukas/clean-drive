import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { Button } from '../components';

export default () => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <Button color="primary">Normal</Button>
            <Button color="secondary">Themed</Button>
        </React.Fragment>
    </ThemeProvider>
);
