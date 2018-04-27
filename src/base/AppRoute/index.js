import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import RouteWrapper from './RouteWrapper';

export const ACCESS_TYPES = {
  ANY: 'ANY',
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED'
};

const AppRoute = ({ component: Component, allowedAccessBy, ...rest }) => (
  <Route
    {...rest}
    component={RouteWrapper(Component, allowedAccessBy)}
  />
);

AppRoute.propTypes = {
  allowedAccessBy: PropTypes.oneOf(Object.keys(ACCESS_TYPES)),
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]).isRequired
};

AppRoute.defaultProps = {
  allowedAccessBy: ACCESS_TYPES.ANY
};

export default AppRoute;
