import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '.';

const withProps = (props = {}) => shallow(<Icon icon={<span>Hello</span>} {...props} />);

describe('Icon', () => {
    it('renders children', () => {
        const wrapper = withProps();
        expect(wrapper.contains('Hello')).toBe(true);
    });
    
    it('renders props when passed in', () => {
      const wrapper = withProps({ id: 'foo' });
      expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
    });
})

