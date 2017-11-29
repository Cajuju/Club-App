import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';


import firebase from 'firebase';
import reducers from './src/reducers';

// import store from './src/store/index';

// import Feed from './src/screens/Feed';
// import Subscriptions from './src/screens/Subscriptions';
import Profile from './src/screens/Profile';
import ClubList from './src/screens/ClubList';
import Club from './src/screens/Club';
import Settings from './src/screens/Settings';
import Login from './src/screens/Login';
import LogOut from './src/screens/LogOut';
import ClubCreate from './src/screens/ClubCreate';

import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';
// import { applyMiddleware } from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux';

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
    // const SubNav = TabNavigator({
    //     Login: { screen: Login },
    //     Profile: { screen: Profile },
    //     Settings: { screen: Settings },
    //     LogOut: { screen: LogOut }
    //   }, {
    //     navigationOptions: { tabBarVisible: false },
    //     tabBarPosition: 'bottom',
    //     swipeEnabled: false,
    //     lazy: true,
    //     animationEnabled: false
    //   }
    // );
    const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));

    const MainNavigator = StackNavigator({
      Login: { screen: Login },
      Main: {
        screen: TabNavigator({
          //Feed: { screen: Feed },
          ClubList: { screen: ClubList },
          //Subscriptions: { screen: Subscriptions },
          ClubCreate: { screen: ClubCreate },
          Profile: { screen: Profile }
        }, { 
          navigationOptions: { tabBarVisible: true },
          tabBarPosition: 'bottom'
        })
      },
      Club: {
        screen: TabNavigator({
          Club: { screen: Club }
        }, {
          navigationOptions: { tabBarVisible: false }
        })
      }
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
