import {SignInScreen} from "./src/screens/sign-in-screen";
import {SignUpScreen} from "./src/screens/sign-up-screen/SignUpScreen";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Auth() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'SignIn'} component={SignInScreen} />
            <Stack.Screen name={'SignUp'} component={SignUpScreen} />
        </Stack.Navigator>
    )
}