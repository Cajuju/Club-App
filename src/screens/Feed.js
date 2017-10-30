import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Feed extends Component {
    static navigationOptions = {
        title: 'Feed',
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
            <ScrollView>
                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>
                
                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>

                <Card>
                    <Text>Feed</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Feed;