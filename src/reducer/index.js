import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import navReducer from './navReducer';

export default combineReducers({
  nav: navReducer,
  Auth: AuthReducer
});
