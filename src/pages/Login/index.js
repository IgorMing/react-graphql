import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginAction } from 'components/Auth/duck';
import LoginForm from 'components/LoginForm';

const mapDispatchToProps = { login: loginAction };

@connect(null, mapDispatchToProps)
export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login('user_test', 'password');
  }

  render() {
    return <LoginForm onSubmit={this.onSubmit} />;
  }
}
