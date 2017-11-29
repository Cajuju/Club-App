import { CLUB_FETCH_SUCCESS } from '../actions/types';

 const INITIAL_STATE = {
  //  club: {
  //    name: '',
  //    detail: '',
  //    category: ''
  //  }
 };

 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case CLUB_FETCH_SUCCESS:
        console.log(action);
        // return { ...state, club: { ...state.club, name: action.payload }
        return action.payload;
      default:
        return state;
   }
 };