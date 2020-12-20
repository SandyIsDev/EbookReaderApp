/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';

export const RegisterScreen = ( props ) => {
    const { navigation } = props;

    const navigateToLogin = ( ) => {
        navigation.navigate( 'Login' );
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Inside Register Screen</Text>
            <Button  title="Go to Login" onPress={navigateToLogin} />
        </View>
    );
};
