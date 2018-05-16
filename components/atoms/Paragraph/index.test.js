import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { Paragraph } from './';

const withProps = (props = {}) => shallow(<Paragraph {...props} theme={theme} />);

describe('Paragraph', () => {
  it('renders with passed props', () => {
      const wrapper = withProps({ id: 'foo' });
      expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});
