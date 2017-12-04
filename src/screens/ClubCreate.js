import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clubUpdate, clubCreate } from '../actions';
import { Card, CardSection, Button } from '../components';
import ClubForm from './ClubForm';

class ClubCreate extends Component {
    onButtonPress() {
        const { name, detail, category } = this.props;

        //Use category but if empty use Non Specific
        this.props.clubCreate({ name, detail, category: category || 'Non Specific' });
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
    const { name, detail, category } = state.clubForm;

    return { name, detail, category };
};

export default connect(mapStateToProps, { 
    clubUpdate, 
    clubCreate
})(ClubCreate);