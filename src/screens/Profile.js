import React, { Component } from 'react';
import { View, Text, AcitivityIndicator, AsyncStorage } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class Profile extends Component {
    static navigationOptions = () => ({
        title: 'Profile',
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    type="font-awesome"
                    name="user"
                    size={20}
                    color={tintColor}
                />
            );
        },
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        // headerRight: (
        //     <Icon
        //          type='material-community'
        //          name='settings'
        //          color='#517fa4'
        //          style={{ marginRight: 20 }}
        //          onPress={() => navigation.navigate('Settings')}
        //     />
        //  )
    })

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ecf0f1'
                }}
            >
                <Button
                    buttonStyle={{
                        width: 200,
                        backgroundColor: PRIMARY_COLOR
                    }}
                    title='Log Out'
                    onPress={() => navigate('LogOut')}
                />
            </View>
        );
    }
}

export default Profile;