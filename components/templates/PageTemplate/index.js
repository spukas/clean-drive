import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hero = styled.section``;

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

export const PageTemplate = ({ header, hero, children, footer, ...props }) => (
  <Wrapper {...props}>
    <Header>{header}</Header>
    {hero && <Hero>{hero}</Hero>}
    <Content>{children}</Content>
    <Footer>{footer}</Footer>
  </Wrapper>
);

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.node,
};

PageTemplate.defaultProps = {
  hero: null,
  children: null,
};
