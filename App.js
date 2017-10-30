import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';


import store from './src/store/index';

import Feed from './src/screens/Feed';
import Subscriptions from './src/screens/Subscriptions';
import Profile from './src/screens/Profile';
import ClubList from './src/screens/ClubList';
import Settings from './src/screens/Settings';


class App extends Component {
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
              Profile: { screen: Profile } 
            })
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
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
