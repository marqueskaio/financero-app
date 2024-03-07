import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {SignInScreen} from "./src/screens/sign-in-screen";
import {SignUpScreen} from "./src/screens/sign-up-screen";
import {MyRegistersScreen} from "./src/screens/my-registers-screen";
import {HomeStack} from "./src/stacks/home-stack";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [logged, setLogged] = useState(false)

    return (
      <NavigationContainer>
        {logged ? (
          <Tab.Navigator tabBar={props => <View {...props} />} screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeStack" component={HomeStack}/>
            <Tab.Screen name="MyRegisterStack" component={MyRegistersScreen}/>
          </Tab.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'SignIn'} component={SignInScreen}/>
            <Stack.Screen name={'SignUp'} component={SignUpScreen}/>
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
