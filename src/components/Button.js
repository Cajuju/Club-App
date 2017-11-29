//Import libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Create component
const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                    {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#27ae60',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 5,
        marginRight: 5
    }
};

//Making the component reusable
export { Button };
