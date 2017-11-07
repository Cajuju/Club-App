import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
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

            //Updated the version for react native elements since the current version made the title render always even when it was empty
            <ScrollView>
                <Card 
                    title="APASO"
                    // require() gives an error but works properly
                    image={require('../../assets/clubs/apasoCover.png')}
                    imageStyle={{
                        flex: 1,
                        height: 270
                    }}
                >
                    <Text style={{ marginBottom: 10, textAlign: 'center' }}>
                        Asian Pacific American Student Organization
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Button
                            icon={{ name: 'add' }}
                            backgroundColor='#03A9F4'
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }}
                            title='SUBSCRIBE'
                        />
                        <Button
                            icon={{ name: 'pageview' }}
                            backgroundColor='#03A9F4'
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }}
                            title='View Page'
                        />
                    </View>
                </Card>

                <Card>
                    <Text>Armenian Student Association</Text>
                </Card>

                <Card>
                    <Text>Black Students Association</Text>
                </Card>

                <Card>
                    <Text>Latin American Student Association</Text>
                </Card>

                <Card>
                    <Text>Pacific Islander Organization</Text>
                </Card>
            </ScrollView>
        );
    }
}

const styles = {

};

export default ClubList;