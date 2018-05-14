import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Button, Link, ListItem } from '../../atoms';

const flexStyles = css`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  ${p => !p.vertical && flexStyles};
  list-style: none;
`;

export const Navigation = props => (
  <Nav {...props}>
    <ListItem>
      <Link>Home</Link>
    </ListItem>
    <ListItem>
      <Link>Services</Link>
    </ListItem>
    <ListItem>
      <Link>Contacts</Link>
    </ListItem>
    <Button raised>Follow us</Button>
  </Nav>
);

Navigation.propTypes = {
  vertical: PropTypes.bool,
};

Navigation.defaultProps = {
  vertical: false,
};
