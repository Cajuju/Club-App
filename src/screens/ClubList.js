import _ from 'lodash';
import React, { Component } from 'react';
import { View, ScrollView, ListView, Text, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { clubFetch } from '../actions';

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
                 style={{ marginRight: 50 }}
            />
         )
    } 

    componentWillMount() {
        this.props.clubFetch();

        // this.createDataSource(this.props);
    }

    compoenentWillReceiveProps(nextProps) {
        // this.createDataSource(nextProps);
        console.log(nextProps);
    }
    
    renderCard() {
        const { navigate } = this.props.navigation;
        const test = this.props.club.name;
        console.log(test);
        return (
            <Card
                title={this.props.club.name}
                titleStyle={{ fontSize: 20 }}
            >
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
                        onPress={() => navigate('Club')}
                    />
                </View>
            </Card>
        );
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
                {this.renderCard()}
            </ScrollView>
        );
    }
}

function mapStateToProps({ clubs }) {
    return {
        club: clubs.club
    };
}

export default connect(mapStateToProps, { clubFetch })(ClubList);