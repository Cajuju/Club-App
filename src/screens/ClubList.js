import _ from 'lodash';
import React, { Component } from 'react';
import { View, ScrollView, ListView, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Card, Button, Icon, colors } from 'react-native-elements';
import { clubFetch, clubSubAdd, clubSubRemove } from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class ClubList extends Component {
    static navigationOptions = {
        title: 'APU Clubs',
        headerLeft: null,
        lazy: true, // Each screen will not mount/load until user clicks on them
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
                 style={{ marginRight: 30 }}
                 color={SECONDARY_COLOR}
            />
         ),
         headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
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
        return this.props.clubs.map(clubs => {
            const {
                name, detail, category, uid
            } = clubs;
            //If the user is an admin, it will render the "edit" and "delete" button
            if (firebase.auth().currentUser) {
                if (firebase.auth().currentUser.uid === '0DuPG18OlYRWUKpaugPvK6t6IIE3') {
                    return (
                        <Card
                            title={name}
                            titleStyle={{ fontSize: 20 }}
                        >
                            <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                                    {detail}
                            </Text>
                            <Text style={{ marginBottom: 10 }}>
                                    {category}
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Button
                                    Component={TouchableOpacity}
                                    raised // gives a shadow
                                    underlayColor={'white'}
                                    icon={{ name: 'delete' }}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{ 
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        marginBottom: 0,
                                        backgroundColor: PRIMARY_COLOR,
                                        width: 150
                                    }}
                                    title='Delete'
                                    onPress={() => {
                                        this.props.clubSubRemove({ uid });
                                    }}
                                />
                                <Button
                                    Component={TouchableOpacity}
                                    raised // gives a shadow
                                    icon={{ name: 'edit' }}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        marginBottom: 0,
                                        backgroundColor: PRIMARY_COLOR,
                                        width: 150
                                    }}
                                    title='Edit'
                                    onPress={() => navigate('ClubEdit')}
                                />
                            </View>
                    </Card>
                    );
                    //If there is a generic user, it will render cards with "view page" and "subscribe"
                } else {
                    return (
                        <Card
                            title={name}
                            titleStyle={{ fontSize: 20 }}
                        >
                            <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                                    {detail}
                            </Text>
                            <Text style={{ marginBottom: 10 }}>
                                    {category}
                            </Text>
                            <View>
                                <Button
                                    Component={TouchableOpacity}
                                    raised // gives a shadow
                                    underlayColor={'white'}
                                    icon={{ name: 'add' }}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{ 
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        marginBottom: 0,
                                        backgroundColor: PRIMARY_COLOR
                                    }}
                                    title='SUBSCRIBE'
                                    onPress={() => {
                                        this.props.clubSubAdd({ name, detail, category, uid });
                                    }}
                                />
                                <Button
                                    Component={TouchableOpacity}
                                    raised // gives a shadow
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
            return (
                <Card
                    title={name}
                    titleStyle={{ fontSize: 20 }}
                >
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                            {detail}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                            {category}
                    </Text>
                    <View>
                        <Button
                            Component={TouchableOpacity}
                            raised // gives a shadow
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
        });
    }

    render() {
        return (
            <ScrollView
                style={{
                    backgroundColor: '#ecf0f1'
                }}
            >
                {this.renderCard()}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const clubs = _.map(state.clubs, (val, uid) => {
      return { ...val, uid };
    });
    return { clubs };
  };


export default connect(mapStateToProps, { clubFetch, clubSubAdd, clubSubRemove })(ClubList);