import {
  CLUB_FETCH_SUCCESS
 } from '../actions/types';

 const INITIAL_STATE = {
   club: {
     name: '',
     clubType: ''
     //pic url
     //description
   }
 };

 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case CLUB_FETCH_SUCCESS:
        //console.log(action.payload);
        return {
          ...state,
          club: {
            ...state.club,
            name: action.payload
          }
        };
      default:
        return state;
   }
 };