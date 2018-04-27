import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const LoginForm = ({ onSubmit }) => (
  <div className="centered">
    <form
      className="pure-form pure-form-stacked"
      onSubmit={onSubmit}
    >
      <fieldset>
        <label htmlFor="email">
          Email
          <input id="email" type="email" placeholder="Email" />
        </label>

        <label htmlFor="password">
          Senha
          <input id="password" type="password" placeholder="Senha" />
        </label>

        <label htmlFor="remember" className="pure-checkbox">
          <input id="remember" type="checkbox" /> Lembrar senha
        </label>

        <button type="submit" className="pure-button pure-button-primary">Login</button>
      </fieldset>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

LoginForm.defaultProps = {
  onSubmit: () => {}
};

export default LoginForm;
