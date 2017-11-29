import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import ClubReducer from './ClubReducer';
import ClubFormReducer from './ClubFormReducer';

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth: AuthReducer,
  clubs: ClubReducer,
  clubForm: ClubFormReducer
});
