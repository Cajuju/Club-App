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
    }

    componentWillReceiveProps(nextProps) {
        // console.log('=================================');
        // console.log('componentWillReceiveProps this.props.club test: ');
        // console.log(this.props.club);
        if (this.props.clubs !== nextProps.clubs) {
            this.setState({ clubs: nextProps.clubs });
        }
        // console.log('=================================');
        // console.log('componentWillReceiveProps nextProps test: ');
        // console.log(nextProps.club);
    }

    
    renderCard() {
        const { navigate } = this.props.navigation;
        const blank = '';
        console.log('=================================');
        console.log('renderCard() test: ');
        console.log(this.props);
        console.log(this.props.clubs);
        console.log(this.props.clubs[0]);

        // Condition where if there are no clubs in the database, it will not render any cards
        if (blank === '') {
            return (
                <Card
                    title={blank}
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

const mapStateToProps = state => {
    const clubs = _.map(state.clubs, (val, uid) => {
      return { ...val, uid };
    });
    console.log('=================================');
    console.log('mapStateToPropts test: ');
    console.log(clubs);
    return { clubs };
  };

// function mapStateToProps({ clubs }) {
//     console.log('=================================');
//     console.log('mapStateToPropts test: ');
//     console.log(clubs.club);
//     return {
//         club: clubs.club
//     };
// }

export default connect(mapStateToProps, { clubFetch })(ClubList);