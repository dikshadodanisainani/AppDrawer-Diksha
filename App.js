import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { AppDrawerNavigator } from './Components/AppDrawerNavigator';

export default function App() {
  return (
    <View>
      <AppContainer/>
     
    </View>
  );
}

const switchNavigator=createSwitchNavigator({
  login:LoginScreen,
  Drawer:{screen: AppDrawerNavigator}

})

const AppContainer=createAppContainer(switchNavigator)

