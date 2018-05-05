import React from 'react';
import PropTypes from 'prop-types';

import { Ul } from './Ul';
import { Wrapper } from './Wrapper';

export const List = ({ component, items }) => {
  const ComponentToRender = component;
  let content = <div />;

  // If we have items, render them
  if (items) {
    content = items.map(item => <ComponentToRender key={`item-${item.id}`} item={item} />);
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
