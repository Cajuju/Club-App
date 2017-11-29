import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { clubUpdate, clubCreate } from '../actions';
import ClubForm from './ClubForm';
import { Card, CardSection, Button } from '../components';


import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class ClubCreate extends Component {
    static navigationOptions = {
        title: 'Create Club',
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => {
            return (
                <Icon
                    name="add"
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

    onButtonPress() {
        const { name, detail, category } = this.props;

        this.props.clubCreate({ name, detail, category: category || 'Non-Specific' });
    }

    render() {
        return (
            <Card>
                <ClubForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, detail, category } = state.clubForm; // gets the state from club form for name, detail, and category

    return { name, detail, category };
};

export default connect(mapStateToProps, {
    clubUpdate,
    clubCreate
})(ClubCreate);