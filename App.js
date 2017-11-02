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
import LogOut from './src/screens/LogOut';

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
    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    // Breaking down the navigator helps with complex screen layout
    // 
    const SubNav = TabNavigator({
        Login: { screen: Login },
        Profile: { screen: Profile },
        LogOut: { screen: LogOut }
      }, {
        navigationOptions: { tabBarVisible: false },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: true,
        animationEnabled: false
      }
    );

    const MainNavigator2 = StackNavigator({
      Main: {
        screen: TabNavigator({
          Feed: { screen: Feed },
          Clubs: { screen: ClubList },
          Subscriptions: { screen: Subscriptions },
          SubNav: { screen: SubNav }
        }, { 
          navigationOptions: { tabBarVisible: true },
          tabBarPosition: 'bottom',
          swipeEnabled: false,
          lazy: true,
          animationEnabled: false
        })
      },
      Settings: {
        screen: StackNavigator({
          Settings: { screen: Settings }
        }, { 
          headerMode: 'none',
          swipeEnabled: false,
          lazy: true,
          animationEnabled: false
        })
      }
    });
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator2 />
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
