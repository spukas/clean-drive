import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { Hamburger } from './';

const withProps = (props = {}) => shallow(<Hamburger {...props} theme={theme} />);

describe('Hamburger', () => {
  it('receives props when passed in', () => {
    const wrapper = withProps({ id: 'foo' });
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});
