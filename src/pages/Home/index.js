import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutAction } from 'components/Auth/duck';

import './index.css';
import { callFlow, resetFlow } from './duck';

const mapStateToProps = ({ home }) => ({ ...home });
const mapDispatchToProps = { callFlow, resetFlow, logout: logoutAction };

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static propTypes = {
    callFlow: PropTypes.func.isRequired,
    calls: PropTypes.number.isRequired,
    logout: PropTypes.func.isRequired,
    resetFlow: PropTypes.func.isRequired
  }

  callRedux = () => {
    this.props.callFlow();
  }

  reset = () => {
    this.props.resetFlow();
  }

  render() {
    const { calls } = this.props;

    return (
      <div>
        <div className="centered">
          Home screen
        </div>

        <div className="flex-column action-container">
          <span>Redux flow is called {calls} times.</span>
          <button onClick={this.callRedux}>Call redux</button>
          <button onClick={this.reset}>Reset Flow</button>
        </div>

        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
