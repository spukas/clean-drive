import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './';

const withProps = (props = {}) => shallow(<Footer {...props} />);

describe('Footer', () => {
  it('renders props when passed in', () => {
    const wrapper = withProps({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});
