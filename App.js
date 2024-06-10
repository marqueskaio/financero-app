import React, {useContext, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { SignInScreen } from "./src/screens/sign-in-screen";
import { SignUpScreen } from "./src/screens/sign-up-screen/SignUpScreen";
import { MyRegistersScreen } from "./src/screens/my-registers-screen";
import { HomeStack } from "./src/stacks/home-stack";
import {AppContext} from "./src/contexts/app-context";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
        <NavigationContainer independent={true}>
            <Tab.Navigator tabBar={props => <View {...props} />} screenOptions={{ headerShown: false }}>
              <Tab.Screen name="HomeStack" component={HomeStack} />
              <Tab.Screen name="MyRegisterStack" component={MyRegistersScreen} />
            </Tab.Navigator>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
