import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { ListItem } from '../ListItem';
import { List } from './';

const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(
      <List items={items} component={() => <ListItem theme={theme} />} />,
    );
    expect(renderedComponent.find(ListItem)).toBeDefined();
  });

  it('should pass all items props to rendered component', () => {
    const component = ({ item }) => <ListItem theme={theme}>{item.name}</ListItem>; // eslint-disable-line react/prop-types
    const renderedComponent = shallow(<List items={items} component={component} />);
    expect(renderedComponent.find(component)).toHaveLength(2);
    expect(
      renderedComponent
        .find(component)
        .at(0)
        .prop('item'),
    ).toBe(items[0]);
    expect(
      renderedComponent
        .find(component)
        .at(1)
        .prop('item'),
    ).toBe(items[1]);
  });
});
