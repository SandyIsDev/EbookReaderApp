/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/root-navigator';

const App = ( ) => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};


export default App;
