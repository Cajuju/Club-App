import React, { Component } from 'react';
import { View, Text, AcitivityIndicator, AsyncStorage } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Settings extends Component {
    static navigationOptions = () => ({
        title: 'Settings'
    })

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
                {/* Log Out is still in progress */}
                {<Text onPress={() => navigate('LogOut')}>Log Out</Text>}
            </View>
        );
    }
}

export default Settings;