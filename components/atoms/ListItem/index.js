import React from 'react';
import PropTypes from 'prop-types';

import { Item } from './Item';
import { Wrapper } from './Wrapper';

export const ListItem = ({ children, theme }) => (
  <Wrapper>
    <Item theme={theme}>{children}</Item>
  </Wrapper>
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  theme: PropTypes.shape({}).isRequired,
};

ListItem.defaultProps = {
  children: '',
};
