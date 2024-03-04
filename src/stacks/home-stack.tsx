import {MyRegistersScreen} from "../screens/my-registers-screen";
import {HomeScreen} from "../screens/home-screen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack= createStackNavigator();
export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="MyRegister" component={MyRegistersScreen}/>
        </Stack.Navigator>
    )
};
