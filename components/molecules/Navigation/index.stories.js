import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navigation } from './';

storiesOf('Navigation', module)
  .add('default', () => (
    <Navigation />
  ))
  .add('reverse', () => (
    <Navigation vertical />
  ))