import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hamburger } from './';

class Burger extends React.Component {
  state = { open: false };

  handleClick = () =>
    this.setState(prevState => ({
      open: !prevState.open,
    }));

  render() {
    return (
      <Hamburger
        {...this.props}
        active={this.state.open}
        onClick={this.handleClick}
      />
    );
  }
}

storiesOf('Hamburger', module)
  .add('default', () => <Burger />)
  .add('secondary', () => <Burger secondary />)
  .add('static', () => <Hamburger />)
  .add('active', () => <Hamburger active />);
