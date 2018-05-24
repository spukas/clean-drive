import React from 'react';
import { storiesOf } from '@storybook/react';
import Cloud from '../../../static/cloud.svg';
import { Feature } from './';

storiesOf('Feature', module).add('default', () => (
  <Feature title="Feature Title" icon={<Cloud />} height={80}>
    This is feature paragraph
  </Feature>
));