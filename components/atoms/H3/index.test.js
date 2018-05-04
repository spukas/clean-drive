import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { H3 } from './';

const withProps = (props = {}) => shallow(<H3 {...props} theme={theme} />);

describe('H3 component', () => {
  it('renders h3 tag', () => {
    const wrapper = withProps();
    expect(wrapper.find('h3')).toHaveLength(1);
  });
  it('renders children', () => {
    const wrapper = withProps({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });
  it('renders passed props', () => {
    const wrapper = withProps({ id: 'foo' });
    expect(wrapper.prop('id')).toEqual('foo');
  });
});
