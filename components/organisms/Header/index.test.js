import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '.';

const withProps = (props = {}) => shallow(<Header {...props} />);

describe('Header', () => {
  it('renders props when passed in', () => {
    const wrapper = withProps({ id: 'foo' });
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});
