import React from 'react';
import { storiesOf } from '@storybook/react';
import Expand from '../../../static/expand.svg';
import { Icon } from '.';

storiesOf('Icon', module)
  .add('default', () => <Icon icon={<Expand />} />)
  .add('light', () => (
    <div style={{ background: 'grey' }}>
      <Icon icon={<Expand />} light />
    </div>
  ))
  .add('height', () => <Icon icon={<Expand />} height={100} />);
