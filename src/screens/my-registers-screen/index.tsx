import {AccountHeaderComponent} from "../../components/account-header-component";
import {View, Text} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const MyRegistersScreen = () => {
    const navigation = useNavigation<any>()

    return(
        <>
        <AccountHeaderComponent onPress={() => navigation.navigate("HomeScreen")}/>
        <View>
            <Text style={{fontSize: 32, fontWeight: "bold", color:"#f27c22", alignSelf:"center"}}>
                Meus Registros
            </Text>
        </View>
        </>
    )
}
