import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '.';

storiesOf('Link', module).add('default', () => (
  <Link href="https://github.com/spukas">Github repository</Link>
));
