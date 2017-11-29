import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
    CLUB_FETCH_SUCCESS,
    CLUB_CREATE,
    CLUB_SAVE_SUCCESS,
    CLUB_UPDATE
} from './types';


//reset navigation
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'ClubList' })
    ]
});

export const clubUpdate = ({ prop, value }) => {
    return {
        type: CLUB_UPDATE,
        payload: { prop, value }
    };
};

export const clubCreate = ({ name, detail, category }) => {
    const { currentUser } = firebase.auth();
    const { navigate } = this.props.navigation;

    //push add information
    //dispatch will help reset the attributes
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Clubs`)
          .push({ name, detail, category })
          .then(() => {
            dispatch({ type: CLUB_CREATE });
            navigate('Main');
            this.props.navigation.dispatch(resetAction);
          });
      };
};

// Called to receive information of the club from Firebase
// export const clubFetch = () => {
//     const ref = firebase.database().ref('Clubs/EthnicClubs');
//     console.log(ref);

//    return (dispatch) => {
//        ref.on('value', snapshot => {
//            dispatch({ type: CLUB_FETCH_SUCCESS, payload: snapshot.child('APASO/name').val() });
//        });
//    };
// };

export const clubFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/clubs`)
        .on('value', snapshot => {
          dispatch({ type: CLUB_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

// Used to save club edit
export const clubSave = ({ name, detail, category, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Clubs/${uid}`)
        .set({ name, detail, category })
        .then(() => {
            dispatch({ type: CLUB_SAVE_SUCCESS });
            this.props.navigation.dispatch(resetAction);
        });
    };
};

// Used to delete clubs
export const clubDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/Clubs/${uid}`)
        .remove()
        .then(() => {
            this.props.navigation.dispatch(resetAction);
        });
    };
};