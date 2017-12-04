import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import firebase from 'firebase';

import store from './src/store/index';

import Feed from './src/screens/Feed';
import Subscriptions from './src/screens/Subscriptions';
import Profile from './src/screens/Profile';
import ClubList from './src/screens/ClubList';
//import Club from './src/screens/Club';
import Settings from './src/screens/Settings';
import Login from './src/screens/Login';
import LogOut from './src/screens/LogOut';
import ClubCreate from './src/screens/ClubCreate';
import ClubEdit from './src/screens/ClubEdit';
import ClubForm from './src/screens/ClubForm';


import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';

class App extends Component {
  //////////////////////////////////////////////////////////////////////////////
  // Setup some warnings to ignore
  // https://github.com/firebase/firebase-js-sdk/issues/97
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
  }
  //////////////////////////////////////////////////////////////////////////////
  // Upon loading app, initialize firebase
  componentWillMount() {
    // DTG - Debugging

    firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);

    //console.log('App.js: Signing Out');
    //AsyncStorage.removeItem('fb_token'); // Just used for testing to clear item
    //SecureStore.deleteItemAsync('fb_token'); // Just used for testing to clear item
    //firebase.auth().signOut();
  }

  render() {
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    // Breaking down the navigator helps with complex screen layout

    const Admin = TabNavigator({
      Feed: { screen: Feed },
      ClubList: { screen: ClubList },
      ClubCreate: { screen: ClubCreate },
      LogOut: { screen: LogOut }
    }, {
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazy: true, // Each screen will not mount/load until user clicks on them
      animationEnabled: false
    });

    ////////////////////////////////////////////////////////////////////////////////
    const noUser = TabNavigator({
      Feed: { screen: Feed },
      ClubList: { screen: ClubList },
      Login: { screen: Login }
    }, {
      tabBarPosition: 'bottom',
    });

    ////////////////////////////////////////////////////////////////////////////////
    const yesUser = TabNavigator({
      Feed: { screen: Feed },
      ClubList: { screen: ClubList },
      Subscriptions: { screen: Subscriptions },
      Profile: { screen: Profile }
    }, {
      tabBarPosition: 'bottom'
    });

    ////////////////////////////////////////////////////////////////////////////
    const MainNavigator = StackNavigator({
      noUser: { screen: noUser },
      Main: { screen: yesUser },
      Admin: { screen: Admin },
      Settings: { screen: Settings },
      LogOut: { screen: LogOut }
    }, {
      navigationOptions: { tabBarVisible: false },
    });
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 25
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
});

export default App;
