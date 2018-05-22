import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from './';

storiesOf('Hero', module)
  .add('default', () => <Hero />)
  .add('light', () => <div style={{ background: 'grey'}}><Hero light /></div>);
