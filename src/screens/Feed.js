import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Feed extends Component {
    static navigationOptions = {
        title: 'Activity Feed',
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    name="list"
                    size={30}
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
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
            </View>
        );
    }
}

export default Feed;