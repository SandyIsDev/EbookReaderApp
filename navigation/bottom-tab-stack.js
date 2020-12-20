/* eslint-disable prettier/prettier */
import React from 'react';
import { HomeStackNavigator } from './home-stack';
import { MyGenreScreen } from '../screens/myGenre/myGenre';
import { PlaylistScreen } from '../screens/playlist/playlist-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const BottomTabStack = (  ) => {
    const navigation = useNavigation();

    const OnMenuClicked  = ( ) => {
        return null;
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: true,
                activeBackgroundColor: '#eef4f8',
                inactiveBackgroundColor: '#ffffff',
                style: {
                    borderTopColor: 'rgba(0, 0, 0, 0)',
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            type="feather"
                            size={28}
                            name="home"
                            color="orange"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MyGenre"
                component={MyGenreScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            type="feather"
                            size={28}
                            name="thumbs-up"
                            color="orange"
                        />
                    ),
                }}
            />
           <Tab.Screen
                name="Playlist"
                component={PlaylistScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            type="feather"
                            size={28}
                            name="book-open"
                            color="orange"
                        />
                    ),
                }}
            />
           <Tab.Screen
                name="Menu"
                component={OnMenuClicked}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            type="feather"
                            size={28}
                            name="list"
                            color="orange"
                            onPress={ ( ) => navigation.toggleDrawer() }
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
