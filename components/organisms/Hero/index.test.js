import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { Hero } from './';

const withProps = (props = {}) => shallow(<Hero {...props} theme={theme} />);

describe('Hero', () => {
  it('renders with props when passed', () => {
    const wrapper = withProps({ id: 'foo' });
    expect(wrapper.find({ id: 'foo' })).toHaveLength(3);
  });
});
