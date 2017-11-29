// Import Libraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Create Component
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

// Make component reusable
export { Spinner };
