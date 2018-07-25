import { combineReducers } from 'redux';
import User from './user';
import Error from './error';

export default combineReducers({
  User,
  Error
});
