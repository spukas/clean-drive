import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../themes';
import { ListItem } from './';

describe('ListItem', () => {
  it('render li tag', () => {
    const wrapper = shallow(<ListItem className="test" theme={theme} />);
    expect(wrapper.find('li').prop('className')).toBeDefined();
  });
});