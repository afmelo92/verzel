import { combineReducers } from 'redux';
import users from './users/reducer';
import user from './user/reducer';

export default combineReducers({
  users,
  user,
});
