/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AllCategoryBooksScreen } from '../screens/all-category-books/all-category';
import { SingleCategoryBooksScreen } from '../screens/single-category-books/single-category';
import { BookDetailsScreen } from '../screens/book-details/book-details-screen';
import { SelectGenreScreen } from '../screens/select-genre/SelectGenre';

const Stack = createStackNavigator();

export const HomeStackNavigator = (props) => {
    return (
       <Stack.Navigator initialRouteName="AllCategoryBooks" headerMode="none">
           <Stack.Screen name="SelectGenre" component={SelectGenreScreen} />
           <Stack.Screen name="AllCategoryBooks" component={AllCategoryBooksScreen} />
           <Stack.Screen name="SingleCategoryBooks" component={SingleCategoryBooksScreen} />
           <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
       </Stack.Navigator>
    );
};
