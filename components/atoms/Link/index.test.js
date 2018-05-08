import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { Link } from './';

const withProps = (props = {}) => shallow(<Link {...props} theme={theme} />);

describe('Link component', () => {
  it('renders anchor tag', () => {
    const wrapper = withProps();
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
