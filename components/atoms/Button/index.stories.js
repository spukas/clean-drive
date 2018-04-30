import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';

storiesOf('Button', module)
  .add('default flat', () => <Button flat>Hello</Button>)
  .add('raised', () => <Button raised>Hello</Button>)
  .add('float', () => <Button float>+</Button>);
