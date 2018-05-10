import React from 'react';
import { shallow } from 'enzyme';
import { List } from './';

const withProps = (props = {}) => shallow(<List {...props} />);

describe('List', () => {
  it('renders ul tag', () => {
    const wrapper = withProps();
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('renders children', () => {
    const wrapper = withProps({ children: 'Item 1' })
    expect(wrapper.contains('Item 1')).toBe(true);
  });
});
