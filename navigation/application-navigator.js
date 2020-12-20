/* eslint-disable prettier/prettier */
import React from 'react';
import { BottomTabStack } from './bottom-tab-stack';
import { BookmarkScreen } from '../screens/bookmarks/BookmarkScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();

export const ApplicationStackNavigator = (props) => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                width: '65%',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={BottomTabStack}
                options={{
                    drawerIcon: config => <Icon
                        size={28}
                        name="home"
                        color="grey"
                    />,
                }}
            />
            <Drawer.Screen
                name="Bookmarks"
                component={BookmarkScreen}
                options={{
                    drawerIcon: config => <Icon
                        size={28}
                        name="bookmark"
                        color="grey"
                    />,
                }}
            />
            <Drawer.Screen
                name="Logout"
                component={BottomTabStack}
                options={{
                    drawerIcon: config => <Icon
                        size={28}
                        name="logout"
                        color="grey"
                    />,
                }}
            />
        </Drawer.Navigator>
    );
};
