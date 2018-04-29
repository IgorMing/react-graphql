import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutAction } from 'components/Auth/duck';

import './index.css';
import { callFlow, resetFlow, getInfo } from './duck';

const mapStateToProps = ({ home }) => ({ ...home });
const mapDispatchToProps = {
  callFlow,
  getInfo,
  logout: logoutAction,
  resetFlow
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired
  }

  fetchInfo = () => {
    this.props.getInfo();
  }

  render() {
    return (
      <div>
        <div className="centered">
          Home screen
        </div>

        <div className="flex-column action-container">
          <button onClick={this.fetchInfo}>Fetch info</button>
        </div>

        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
