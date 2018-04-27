import { AUTH_KEYS } from './duck';

// When you add another function, just remove the line below
// eslint-disable-next-line
export function isAuthenticated() {
  const userData = {
    token: localStorage.getItem(AUTH_KEYS.TOKEN),
    user: localStorage.getItem(AUTH_KEYS.USER)
  };

  return Boolean(userData.token);
}
