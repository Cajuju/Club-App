import React, { Component } from 'react';
import { View, Text, AcitivityIndicator, AsyncStorage } from 'react-native';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Club extends Component {
    static navigationOptions = {
        title: 'Club Name'
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