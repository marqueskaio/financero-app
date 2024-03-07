import {AccountHeaderComponent} from "../../components/account-header-component";
import {View, Text} from "react-native";
import React from "react";

export const MyRegistersScreen = () => {

    return(
        <>
        <AccountHeaderComponent/>
        <View>
            <Text style={{fontSize: 32, fontWeight: "bold", color:"#f27c22", alignSelf:"center"}}>
                Meus Registros
            </Text>
        </View>
        </>
    )
}
