import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ACCESS_TYPES } from '.';

export default function RouteWrapper(WrappedComponent, allowedAccessBy) {
  const WrapperComponent = (props) => {
    const { isAuthenticated, ...other } = props;
    switch (allowedAccessBy) {
      case ACCESS_TYPES.AUTHENTICATED:
        if (!isAuthenticated) {
          return <Redirect to="/login" />;
        }
        break;
      case ACCESS_TYPES.NOT_AUTHENTICATED:
        if (isAuthenticated) {
          return <Redirect to="/home" />;
        }
        break;
      case ACCESS_TYPES.ANY:
      default:
        return <WrappedComponent {...other} />;
    }

    return <WrappedComponent {...other} />;
  };

  WrapperComponent.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  const mapStateToProps = ({ auth }) => ({ isAuthenticated: auth.isAuthenticated });
  return connect(mapStateToProps)(WrapperComponent);
}
