import {Text, View} from "react-native";
import {LogoIcon} from "../../assets/icon";
import React from "react";
import {LinearGradient} from "react-native-linear-gradient";

export const AccountHeaderComponent = () => {
    return (
            <View style={{backgroundColor:"#f27c22", width:"100%", height: "21%", padding: 28,}}>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <View style={{width: "50%"}}>
                        <Text style={{color: "white", fontSize: 28, fontWeight: "bold"}}>Olá, Robertinho</Text>
                    </View>
                    <View style={{alignItems: "flex-end", width: "50%"}}>
                        <View style={{backgroundColor: "red"}}>
                            <LogoIcon width={48} height={48}/>
                        </View>
                    </View>

                </View>
                <View>
                    <Text style={{color: "white", fontSize: 22, fontWeight: "bold"}}>Conta</Text>
                    <Text style={{color: "white", fontSize: 22}}>R$8.998,00</Text>
                </View>
            </View>
    )
}
