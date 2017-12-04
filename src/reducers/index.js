import { combineReducers } from 'redux';
import auth from './auth_reducer';
import ClubFormReducer from './ClubFormReducer';
import ClubReducer from './ClubReducer';

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth,
  clubForm: ClubFormReducer,
  clubs: ClubReducer
});
