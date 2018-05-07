import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import Loader from '.';

const wrap = (props = {}) => shallow(<Loader {...props} theme={theme} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});
