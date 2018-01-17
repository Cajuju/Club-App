import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { clubUpdate, clubCreate } from '../actions';
import { Card, CardSection, Button } from '../components';
import ClubForm from './ClubForm';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class ClubCreate extends Component {
    static navigationOptions = {
        title: 'Add Club',
        headerLeft: null,
        lazy: true, // Each screen will not mount/load until user clicks on them
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    name="add"
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
    }
    onButtonPress() {
        const { name, detail, category } = this.props;

        //Use category but if empty use Non Specific
        this.props.clubCreate({ name, detail, category: category || 'Non Specific' });
    }

    render() {
        return (
            <View
                style={{ backgroundColor: '#ecf0f1' }}
            >
                <Card>
                    <ClubForm {...this.props} />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Create
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, detail, category } = state.clubForm;

    return { name, detail, category };
};

export default connect(mapStateToProps, { 
    clubUpdate, 
    clubCreate
})(ClubCreate);