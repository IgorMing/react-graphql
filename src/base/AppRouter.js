import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

const AppRouter = ({ children }) => (
  <Router>
    <div className="centered">
      {children}
    </div>
  </Router>
);

AppRouter.propTypes = {
  children: PropTypes.array.isRequired
};

export default AppRouter;
