import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../components/Button';
import { theme } from '../../src/theme';

describe('Button', () => {
    it('Button renders', () => {
        const component = renderer.create(<Button theme={theme} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('Button renders with secondary color prop', () => {
        const component = renderer.create(<Button theme={theme} color="secondary" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
