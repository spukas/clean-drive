import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';

storiesOf('Button', module)
  .add('default', () => <Button>Hello</Button>)
  .add('themed', () => <Button color="secondary">Hello</Button>);
