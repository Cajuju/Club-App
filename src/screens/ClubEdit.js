import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { clubUpdate, clubCreate } from '../actions';
import { Card, CardSection, Button, Input } from '../components';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

class ClubCreate extends Component {
    static navigationOptions = {
        title: 'APU Clubs',
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
        const { name, detail } = this.props;
        console.log(name);
        console.log(detail);
        return (
            <Card>
                <View>
                 <CardSection>
                        <Input 
                            label="Club Name"
                            placeholder={name}
                            value={this.props.name}
                            onChangeText={value => this.props.clubUpdate({ prop: 'name', value })}
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Detail"
                        placeholder={detail}
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
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Edit
                    </Button>
                </CardSection>
            </Card>
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

export default connect(mapStateToProps, { 
    clubUpdate, 
    clubCreate
})(ClubCreate);