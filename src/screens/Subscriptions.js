import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Subscriptions extends Component {
    static navigationOptions = {
        title: 'Subscription',
        headerLeft: null,
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
            <ScrollView>
                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>
                
                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>

                <Card>
                    <Text>Subscription</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Subscriptions;