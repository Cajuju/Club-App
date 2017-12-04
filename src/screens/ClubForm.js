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
                            label="Club Name"
                            placeholder="APU Club"
                            value={this.props.name}
                            onChangeText={value => this.props.clubUpdate({ prop: 'name', value })}
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Detail"
                        placeholder="Short description of this club"
                        value={this.props.detail}
                        onChangeText={value => this.props.clubUpdate({ prop: 'detail', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Category</Text>
                    <Picker
                        selectedValue={this.props.category}
                        onValueChange={value => this.props.clubUpdate({ prop: 'category', value })}
                    >
                        <Picker.Item label="Non Specific" value="Non Specific" />
                        <Picker.Item label="Ethnic Org" value="Ethnic Org" />
                        <Picker.Item label="Performing Arts" value="Performing Arts" />
                        <Picker.Item label="Social Club" value="Social Club" />
                        <Picker.Item label="Service Club" value="Service Club" />
                        <Picker.Item label="Academic Club" value="Academic Club" />
                        <Picker.Item label="Honor Society" value="Honor Society" />
                        <Picker.Item label="Athletic Club" value="Athletic Club" />
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