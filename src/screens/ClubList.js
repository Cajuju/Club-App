import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class ClubList extends Component {
    static navigationOptions = {
        title: 'APU Clubs',
        headerLeft: null,
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
            // ---------------TO DO LIST-----------------------
            // Make as many cards as there is clubs
            // Cards will have background image of the club
            // Need to figure out where it will pull all the information from (unless I choose to hard code all the information)
            // Make Category Seperator
            
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