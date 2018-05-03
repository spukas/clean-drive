import React from 'react';
import { storiesOf } from '@storybook/react';
import { H2 } from './';

storiesOf('H2', module)
  .add('default', () => <H2>Hello, I am H2</H2>)
  .add('with light prop', () => <H2 light>Hello, I am barely visible</H2>)
  .add('custom color', () => <H2 color="red">Hello, I have custom color</H2>);
