import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from '.';

const withProps = (props = {}) => shallow(<Navigation {...props} />);

describe('Navigation', () => {
  it('renders props when passed in', () => {
    const wrapper = withProps({ id: 'foo' });
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});
