import React from 'react';
import { shallow } from 'enzyme';
import { Atom } from '.';
import theme from '../../themes';

const wrap = (props = {}) => shallow(<Atom {...props} theme={theme} />);

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' });
  expect(wrapper.contains('test')).toBe(true);
});

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});
