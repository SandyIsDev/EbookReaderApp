/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './auth-stack';
import { ApplicationStackNavigator } from './application-navigator';

const Stack = createStackNavigator();

export const RootNavigator = ( props ) => {
    return (
        <Stack.Navigator initialRouteName="ApplicationStack">
            <Stack.Screen
                name="AuthStack"
                component={AuthStackNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ApplicationStack"
                component={ApplicationStackNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
