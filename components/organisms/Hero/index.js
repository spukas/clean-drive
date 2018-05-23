import React from 'react';
import styled from 'styled-components';
import Expand from '../../../static/expand.svg';
import { Block, H1, Paragraph, Button, Icon } from '../../atoms';

const Wrapper = styled(Block)`
  text-align: center;
  padding: 2rem;
`;

const InnerWrapper = styled(Block)`
  display: grid;
  grid-auto-rows: 1fr;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const Text = styled(Paragraph)`
  text-align: center;
`;

export const Hero = props => (
  <Wrapper>
    <InnerWrapper {...props}>
      <H1 {...props}>Lorem ipsum dolor sit amet</H1>
      <Text {...props}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Button raised>Call to action</Button>
    </InnerWrapper>

    <Button float>
      <Icon icon={<Expand />} light />
    </Button>
  </Wrapper>
);
