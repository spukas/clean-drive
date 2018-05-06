import React from 'react';
import { mount } from 'enzyme';
import theme from '../../themes';
import { ListItem } from './';


describe('ListItem component', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<ListItem className="test" theme={theme} />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });
});