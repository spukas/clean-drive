import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block } from '.';

storiesOf('Block', module).add('default', () => (
  <Block>Hello, I'm Block</Block>
));
