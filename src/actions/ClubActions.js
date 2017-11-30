import firebase from 'firebase';
import { 
    CLUB_FETCH_SUCCESS,
} from './types';

// Called to receive information of the club from Firebase
export const clubFetch = () => {
    const ref = firebase.database().ref('Clubs/EthnicClubs');
    console.log(ref);

   return (dispatch) => {
       ref.on('value', snapshot => {
           dispatch({ type: CLUB_FETCH_SUCCESS, payload: snapshot.child('APASO/name').val() });
       });
   };
};