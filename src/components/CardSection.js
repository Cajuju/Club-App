//Import Libraries
import React from 'react';
import { View } from 'react-native';

//Create component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
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
        borderColor: '#e74c3c',
        position: 'relative',
    }
};

export default CardSection;
