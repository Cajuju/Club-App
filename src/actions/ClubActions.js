import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { 
    CLUB_UPDATE,
    CLUB_CREATE,
    CLUB_FETCH_SUCCESS,
    CLUB_NAME_FETCH,
    CLUB_SAVE_SUCCESS
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
    console.log('=================================');
    console.log('clubFetch test: ');
    console.log(ref);

   return (dispatch) => {
       ref.on('value', snapshot => {
           dispatch({ type: CLUB_FETCH_SUCCESS, payload: snapshot.val() });
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