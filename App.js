import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from "./src/screens/home-screen";
import 'react-native-gesture-handler';
import {AuthScreen} from "./src/screens/auth-screen";
import {RegisterScreen} from "./src/screens/register-screen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [logged, setLogged] = useState(false)


    return (
      <NavigationContainer>
        {logged ? (
          <Tab.Navigator tabBar={props => <View {...props} />} screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Sobre" component={HomeScreen}/>
          </Tab.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Auth'} component={AuthScreen}/>
            <Stack.Screen name={'Register'} component={RegisterScreen}/>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    )
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
