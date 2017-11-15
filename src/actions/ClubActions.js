import firebase from 'firebase';
import { CLUB_FETCH_SUCCESS } from './types';

export const clubFetch = () => {
    const ref = firebase.database().ref('Clubs/EthnicClubs/APASO');
    console.log(ref);

   return (dispatch) => {
       ref.on('value', snapshot => {
           dispatch({ type: CLUB_FETCH_SUCCESS, payload: snapshot.val() });
       });
   };
};