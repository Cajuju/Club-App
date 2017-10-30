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
import Settings from './src/screens/Settings';
import Login from './src/screens/Login';

import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';

class App extends Component {
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
    //Creates the Navigation with Header and bottom navbar (Still working on settings one)
    const MainNavigator = TabNavigator({
      Main: {
        screen: StackNavigator({
          Header: {
            screen: TabNavigator({
              Feed: { screen: Feed },
              Clubs: { screen: ClubList },
              Subscriptions: { screen: Subscriptions },
              Profile: { 
                screen: TabNavigator({
                  // Login: { screen: Login },
                  Profile: { screen: Profile }
                }, { navigationOptions: { tabBarVisible: false } })
               } 
            }, { navigationOptions: { tabBarVisible: true } })
          },
          Settings: {
            screen: StackNavigator({
              Settings: { screen: Settings }
            }, { headerMode: 'none' })
          }
        })
      }
    }, { navigationOptions: { tabBarVisible: false } });

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
