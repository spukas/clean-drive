import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1 } from './';

storiesOf('H1', module)
    .add('default', () => <H1>Hello, I am H1</H1>)
    .add('with light prop', () => <H1 light>Hello, I am barely visible</H1>)
    .add('custom color', () => <H1 color="red">Hello, I have custom color</H1>)
    