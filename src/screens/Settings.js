import React, { Component } from 'react';
import { View, Text, AcitivityIndicator, AsyncStorage } from 'react-native';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Settings extends Component {
    static navigationOptions = {
        title: 'Settings'
    }

    render() {
        return (
            <View>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
            </View>
        );
    }
}

export default Settings;