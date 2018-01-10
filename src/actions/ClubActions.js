import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { 
    CLUB_UPDATE,
    CLUB_CREATE,
    CLUB_FETCH_SUCCESS,
    CLUB_SUB_FETCH_SUCCESS,
    CLUB_SAVE_SUCCESS,
    CLUB_SUB_ADD_SUCCESS,
    CLUB_SUB_REMOVE_SUCCESS
} from './types';

export const clubUpdate = ({ prop, value }) => {
    return {
      type: CLUB_UPDATE,
      payload: { prop, value }
    };
};

export const clubCreate = ({ name, detail, category }) => {
    const navigateAction = NavigationActions.navigate({ routeName: 'Main' });

    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Main' })
        ]
    });

    // push add infomation
    // dispatch will help reset the attributes
    return (dispatch) => {
        firebase.database().ref('/users/0DuPG18OlYRWUKpaugPvK6t6IIE3/clubs')
        .push({ name, detail, category })
        .then(() => {
            dispatch({ type: CLUB_CREATE });
            this.props.navigation.dispatch(navigateAction);
            this.props.navigation.dispatch(resetAction);
        });
    };
};

// Called to receive information of the club from Firebase
export const clubFetch = () => {
    const ref = firebase.database().ref('/users/0DuPG18OlYRWUKpaugPvK6t6IIE3/clubs');
   return (dispatch) => {
       ref.on('value', snapshot => {
           dispatch({ type: CLUB_FETCH_SUCCESS, payload: snapshot.val() });
       });
   };
};

// Called to receive information of the club from Firebase
export const clubSubFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/clubs`)
            .on('value', snapshot => {
                dispatch({ type: CLUB_SUB_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

// Will create a list of subs that the user took from the admin
export const clubSubAdd = ({ name, detail, category, uid }) => {
    const { currentUser } = firebase.auth();
    let check;
    const ref = firebase.database().ref(`/users/${currentUser.uid}/clubs`);
    ref.once('value')
        .then(snapshot => {
            check = snapshot.child(`${uid}/name`).val();
        });
    console.log(check);
    console.log(name);
    if (name !== check) {
        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/clubs`)
            .push({ name, detail, category })
            .then(() => {
                dispatch({ type: CLUB_SUB_ADD_SUCCESS });
            });
        };
    }
};

// Will create a list of subs that the user took from the admin
export const clubSubRemove = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/clubs/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: CLUB_SUB_REMOVE_SUCCESS });
        });
    };
};

 // Used to save club edit
 export const clubSave = ({ name, detail, category }) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Main' })
        ]
    });

    return (dispatch) => {
      firebase.database().ref('/users/0DuPG18OlYRWUKpaugPvK6t6IIE3/clubs')
        .set({ name, detail, category })
        .then(() => {
          dispatch({ type: CLUB_SAVE_SUCCESS });
          this.props.navigation.dispatch(resetAction);
        });
    };
};

// Used to delete club
export const clubDelete = () => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Main' })
        ]
    });

    return () => {
        firebase.database().ref('/users/0DuPG18OlYRWUKpaugPvK6t6IIE3/clubs')
        .remove()
        .then(() => {
        this.props.navigation.dispatch(resetAction);
        });
    };
};