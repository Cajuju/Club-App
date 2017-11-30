import {
    CLUB_UPDATE,
    CLUB_CREATE,
   } from '../actions/types';
  
   const INITIAL_STATE = {
     club: {
       name: '',
       detail: '',
       category: ''
     }
   };
  
   export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
        case CLUB_UPDATE:
          // action.payload === { prop: 'name', value: 'jane' }
          // Key interpolation not an array
          return { ...state, [action.payload.prop]: action.payload.value };
        case CLUB_CREATE:
          return INITIAL_STATE;
        default:
          return state;
     }
   };