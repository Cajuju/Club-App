import _ from 'lodash';
import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { clubSubFetch, clubSubRemove } from '../actions';
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
        this.props.clubSubFetch();
    }

    componentWillReceiveProps(nextProps) {
        // console.log('=================================');
        // console.log('componentWillReceiveProps this.props.club test: ');
        // console.log(this.props.club);
        if (this.props.clubSub !== nextProps.clubSub) {
            this.setState({ clubSub: nextProps.clubSub });
        }
        // console.log('=================================');
        // console.log('componentWillReceiveProps nextProps test: ');
        // console.log(nextProps.club);
    }
    
    renderCard() {
        const { navigate } = this.props.navigation;
        return this.props.clubSub.map(clubSub => {
            const {
                name, detail, category, uid
            } = clubSub;

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
                            icon={{ name: 'delete' }}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ 
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                backgroundColor: PRIMARY_COLOR
                            }}
                            title='Remove Sub'
                            onPress={() => {
                                this.props.clubSubRemove({ uid });
                            }}
                        />
                        {/* <Button
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
                        /> */}
                    </View>
            </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView
                style={{ backgroundColor: '#ecf0f1' }}
            >
                {this.renderCard()}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const clubSub = _.map(state.clubSub, (val, uid) => {
      return { ...val, uid };
    });
    // console.log('=================================');
    // console.log('mapStateToPropts test: ');
    // console.log(clubSub);
    return { clubSub };
  };

// function mapStateToProps({ clubSub }) {
//     console.log('=================================');
//     console.log('mapStateToPropts test: ');
//     console.log(clubSub.club);
//     return {
//         club: clubSub.club
//     };

//     render() {
//         return (
//             <Text> Work in Progress </Text>
//         );
//     }
//  }

export default connect(mapStateToProps, { clubSubFetch, clubSubRemove })(Subscriptions);
// export default Subscriptions;