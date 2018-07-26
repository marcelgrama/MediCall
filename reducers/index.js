import { combineReducers } from 'redux';
import User from './user';
import Error from './error';

import Loading from './loading';

export default combineReducers({
  User,
  Error,

  Loading
});
