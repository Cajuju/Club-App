import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClubForm from './ClubForm';
import { clubUpdate, clubSave, clubDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from '../components';

class ClubEdit extends Component {
    //State is a way to initialize variables
    state = { showModal: false }
    componentWillMount() {
        _.each(this.props.club, (value, prop) => {
            this.props.clubUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, detail, category } = this.props;
        
        //Saves changes in our edit form
        this.props.clubSave({ name, detail, category, uid: this.props.club.uid });
    }

    onAccept() {
        const { uid } = this.props.club;

        this.props.clubDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <ClubForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Club
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, detail, category } = state.clubForm;

    return { name, detail, category };
};

export default connect(mapStateToProps, { 
    clubUpdate, clubSave, clubDelete
})(ClubEdit);