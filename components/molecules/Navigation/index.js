import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, ListItem } from '../../atoms';

const Nav = styled.nav`
  display: ${p => p.vertical ? 'block' : 'flex' };
  list-style: none;
`;

export const Navigation = props => (
  <Nav {...props}>
    <ListItem>
      <Link>Home</Link>
    </ListItem>
    <ListItem>
      <Link>Contacts</Link>
    </ListItem>
    <ListItem>Without link</ListItem>
  </Nav>
);

Navigation.propTypes = {
  vertical: PropTypes.bool,
};

Navigation.defaultProps = {
  vertical: false,
};


