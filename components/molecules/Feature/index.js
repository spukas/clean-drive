import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon, H3, Paragraph } from '../../atoms';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 200px;
  height: 300px;
  padding: 1rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const StyledIcon = styled(Icon)`
  flex: none;
  @media screen and (max-width: 640px) {
    width: 32px;
  }
`

const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`;

export const Feature = ({ icon, title, children, ...props }) => (
  <Wrapper {...props}>
    {icon && <StyledIcon icon={icon} height={80} />}
    <Text>
      <H3>{title}</H3>
      <Paragraph>{children}</Paragraph>
    </Text>
  </Wrapper>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
};

Feature.defaultProps = {
    icon: null,
    children: null,
}
