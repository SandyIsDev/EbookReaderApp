/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';


const Stack = createStackNavigator();

export const AuthStackNavigator = (props) => {
    return (
       <Stack.Navigator initialRouteName="Register">
           <Stack.Screen name="Login" component={LoginScreen} />
           <Stack.Screen name="Register" component={RegisterScreen} />
       </Stack.Navigator>
    );
};
