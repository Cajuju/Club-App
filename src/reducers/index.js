import { combineReducers } from 'redux';
import auth from './auth_reducer';
import ClubReducer from './ClubReducer';

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth,
  clubs: ClubReducer
});
