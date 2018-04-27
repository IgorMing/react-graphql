import { isAuthenticated } from './selectors';

export const AUTH_KEYS = {
  TOKEN: '@TOKEN',
  USER: '@USER'
};

// Actions
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

const INITIAL_STATE = {
  token: localStorage.getItem(AUTH_KEYS.TOKEN),
  user: localStorage.getItem(AUTH_KEYS.USER) || {},
  isAuthenticated: isAuthenticated()
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT:
      return {
        ...state,
        ...INITIAL_STATE,
        isAuthenticated: false
      };
    default: return state;
  }
}

// Action Creators
// We will disable the eslint error on next line until start request login on backend
// eslint-disable-next-line
export function loginAction(user, password) {
  const userData = {
    token: '__mocked_token__',
    user
  };

  localStorage.setItem(AUTH_KEYS.TOKEN, userData.token);
  localStorage.setItem(AUTH_KEYS.USER, userData.user);

  return {
    type: LOGIN,
    payload: {
      isAuthenticated: true,
      ...userData
    }
  };
}

export function logoutAction() {
  localStorage.clear();

  return {
    type: LOGOUT
  };
}
