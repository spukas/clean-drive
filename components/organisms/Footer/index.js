import React from 'react';
import styled from 'styled-components';

import { Paragraph, Link } from '../../atoms';

const Wrapper = styled.div`
  background-color: #08aeea;
  background-image: linear-gradient(27deg, #08aeea 30%, #2af563 100%);

  padding: 2rem;
`;

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`;

export const Footer = props => (
  <Wrapper {...props}>
    <Credits light>
      2018 -{' '}
      <Link light href="https://nextjs.org">
        Next.js -
      </Link>{' '}
      <Link light href="https://www.styled-components.com">
      Styled-Components -
      </Link>{' '}
      <Link light href="http://bradfrost.com/blog/post/atomic-web-design">
      Atomic Design -
      </Link>{' '}
      <Link light href="https://facebook.github.io/jest">
      Jest
      </Link>
    </Credits>
  </Wrapper>
);
