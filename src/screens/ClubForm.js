import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { clubUpdate } from '../actions';
import { CardSection, Input } from '../components';

class ClubForm extends Component {
    render() {
        return (
            <View>
                 <CardSection>
                        <Input 
                            label="Name"
                            placeholder="Club Name"
                            value={this.props.name}
                            onChangeText={value => this.props.clubUpdate({ prop: 'name', value })}
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Detail"
                        placeholder="Your Club's Short Description"
                        value={this.props.detail}
                        onChangeText={value => this.props.clubUpdate({ prop: 'detail', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>category</Text>
                    <Picker
                        selectedValue={this.props.category}
                        onValueChange={value => this.props.ClubUpdate({ prop: 'category', value })}
                    >
                        <Picker.Item label="Ethnic Organization" value="Ethnic" />
                        <Picker.Item label="Performing Arts" value="Performing Arts" />
                        <Picker.Item label="Social" value="Social" />
                        <Picker.Item label="Service" value="Service" />
                        <Picker.Item label="Academic" value="Academic" />
                        <Picker.Item label="Honor Societies" value="Honor" />
                        <Picker.Item label="Athletics" value="Athletics" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, detail, category } = state.clubForm;

    return { name, detail, category };
};

export default connect(mapStateToProps, { clubUpdate })(ClubForm);