import {
    CLUB_SUB_FETCH_SUCCESS,
    CLUB_SUB_ADD_SUCCESS,
    CLUB_SUB_REMOVE_SUCCESS
   } from '../actions/types';
  
  const INITIAL_STATE = {};
  
  export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
          case CLUB_SUB_FETCH_SUCCESS:
              return action.payload;
          case CLUB_SUB_ADD_SUCCESS:
              return action.payload;
          case CLUB_SUB_REMOVE_SUCCESS:
              return action.payload;
          default:
              return state;
      }
  };