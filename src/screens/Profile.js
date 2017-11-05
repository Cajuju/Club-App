import React, { Component } from 'react';
import { View, Text, AcitivityIndicator, AsyncStorage } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    type="font-awesome"
                    name="user"
                    size={20}
                    color={'black'}
                />
            );
        },
        headerRight: (
            <Icon
                 type='material-community'
                 name='settings'
                 color='#517fa4'
                 style={{ marginRight: 20 }}
                 onPress={() => navigation.navigate('Settings')}
            />
         )
    })

    render() {
        return (
            <View>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
                <Text>Profile</Text>
            </View>
        );
    }
}

export default Profile;