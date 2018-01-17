//Import Libraries
import React from 'react';
import { View } from 'react-native';

//Create component
const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

//Create a style for our componenet
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',   // spaces items vertically
        //borderColor: '#27ae60',
        position: 'relative',
    }
};

export { CardSection };
