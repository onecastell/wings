import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DefaultButton extends Component {
  static propTypes = {
    onPay: PropTypes.func.isRequired,
    processing: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    payment: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    processing: false,
    payment: false,
  };

  render() {
    return <button onClick={() => this.props.onPay()}>Donate</button>;
  }
}
