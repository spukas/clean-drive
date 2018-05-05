import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListItem } from '../ListItem';
import { List } from './';

const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

storiesOf('List', module).add('default', () => (
  <List items={items} component={({ item }) => <ListItem>{item.name}</ListItem>} />
));
