import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListItem } from '../ListItem';
import { List } from './';

storiesOf('List', module)
  .add('default', () => (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ))
