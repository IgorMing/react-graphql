import { combineReducers } from 'redux';

import auth from '../components/Auth/duck';
import home from '../pages/Home/duck';

export default combineReducers({
  auth,
  home
});
