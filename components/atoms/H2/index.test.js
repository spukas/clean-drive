import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { H2 } from './';

const withProps = (props = {}) => shallow(<H2 {...props} theme={theme} />);

describe('H2 component', () => {
  it('renders h2 tag', () => {
    const wrapper = withProps();
    expect(wrapper.find('h2')).toHaveLength(1);
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
