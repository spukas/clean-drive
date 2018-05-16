import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from './';

const withBackground = (c) => <div style={{ background: 'grey' }}>{c}</div>

storiesOf('Paragraph', module)
  .add('default', () => (
    <Paragraph>Lorem ipsum dolor sit amet, vis dicta comprehensam ex</Paragraph>
  ))
  .add('with light prop', () => withBackground(
    <Paragraph light>Lorem ipsum dolor sit amet, vis dicta comprehensam ex</Paragraph>
  ));
