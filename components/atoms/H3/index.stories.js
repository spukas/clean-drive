import React from 'react';
import { storiesOf } from '@storybook/react';
import { H3 } from './';

storiesOf('H3', module)
  .add('default', () => <H3>Hello, I am H3</H3>)
  .add('with light prop', () => <H3 light>Hello, I am barely visible</H3>)
  .add('custom color', () => <H3 color="red">Hello, I have custom color</H3>);
