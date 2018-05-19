import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '.';

const withBackground = component => (
  <div style={{ background: 'grey' }}>
    {component}
  </div>
)

storiesOf('Link', module)
  .add('default', () => <Link href="https://github.com/spukas">Github repository</Link>)
  .add('light', () => withBackground(
    <Link light href="https://github.com/spukas">
      Github repository
    </Link>
  ));
