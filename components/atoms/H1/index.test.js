import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { H1 } from './';

const withProps = (props = {}) => shallow(<H1 {...props} theme={theme} />);

describe('H1 component', () => {
  it('renders h1 tag', () => {
    const wrapper = withProps();
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('renders children', () => {
    const wrapper = withProps({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });
  it('renders passed props', () => {
    const wrapper = withProps({ id: 'foo' });
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});
