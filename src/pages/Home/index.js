import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutAction } from 'components/Auth/duck';

import './index.css';
import { getInfo } from './duck';

const mapStateToProps = ({ home }) => ({ ...home });
const mapDispatchToProps = {
  getInfo,
  logout: logoutAction
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  }

  get renderNames() {
    const { users } = this.props;

    if (users.length === 0) {
      return <strong>No users to be shown.</strong>;
    }

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>CPF</td>
            <td>Sex</td>
          </tr>
        </thead>
        <tbody>
          {users.map((each) => (
            <tr key={each.id}>
              <td>{each.name}</td>
              <td>{each.cpf}</td>
              <td>{each.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
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

        <div>
          <h3>Fetched names</h3>
          {this.renderNames}
        </div>
      </div>
    );
  }
}
