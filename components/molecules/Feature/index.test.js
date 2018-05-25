import React from 'react'
import { shallow } from 'enzyme'
import { Feature } from '.'

const withProps = (props = {}) => shallow(<Feature title="Hello" {...props} />);

describe('Feature', () => {
    it('renders children', () => {
      const wrapper = withProps({ children: 'child' })
      expect(wrapper.contains('child')).toBe(true)
    })

    it('renders props when passed in', () => {
      const wrapper = withProps({ id: 'foo' })
      expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
    })
})
