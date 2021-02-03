import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideDrawer from './CustomSideDrawer';
import HomeScreen from '../screens/HomeScreen'


export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeScreen
    },
},
{
    contentComponent:CustomSideDrawer
},
{
    initialRouteName:'Home'
}
)