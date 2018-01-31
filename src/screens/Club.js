import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Club extends Component {
    static navigationOptions = {
        title: 'Club Name',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: 'white'
    }

    render() {
        return (
            <View>
                <Text>Club</Text>
                <Text>Club</Text>
                <Text>Club</Text>
                <Text>Club</Text>
                <Text>Club</Text>
                <Text>Club</Text>
                <Text>Club</Text>
            </View>
        );
    }
}

export default Club;