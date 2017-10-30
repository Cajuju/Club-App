import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class ClubList extends Component {
    static navigationOptions = {
        title: 'APU Clubs',
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    type='font-awesome'
                    name="map-signs"
                    size={20}
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
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>
                
                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>

                <Card>
                    <Text>Club Name</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default ClubList;