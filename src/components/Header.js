// Import Libraries for making a component - Step 1
import React from 'react';
import { Text, View } from 'react-native';

// Make a component - Step 2
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#27ae60', //Udemy #F8F8F8
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        paddingTop: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    }
};

// Make the component available to other parts of the app - Step 3
export { Header };
