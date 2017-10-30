import React, { Component } from 'react';
import { View, Text, AcitivityIndicator, AsyncStorage } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Subscriptions extends Component {
    static navigationOptions = {
        title: 'Subscription',
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    name="star"
                    size={25}
                    color={tintColor}
                />
            );
        },
        headerRight: (
            <Icon
                 type='material-community'
                 name='filter-variant'
                 style={{ marginRight: 20 }}
            />
         )
    }

    render() {
        return (
            <View>
                <Text>Subscriptions</Text>
                <Text>Subscriptions</Text>
                <Text>Subscriptions</Text>
                <Text>Subscriptions</Text>
                <Text>Subscriptions</Text>
                <Text>Subscriptions</Text>
                <Text>Subscriptions</Text>
            </View>
        );
    }
}

export default Subscriptions;