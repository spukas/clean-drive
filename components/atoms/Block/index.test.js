import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { Block } from './';

const component = (props = {}) => shallow(<Block {...props} theme={theme} />);

describe('Block', () => {
  it('renders with children', () => {
    const wrapper = component({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });
  it('renders with passed props', () => {
    const wrapper = component({ id: 'bar' });
    expect(wrapper.find({ id: 'bar' })).toHaveLength(1);
  });
});
