import { Text, View } from "react-native";
import { LeftArrowCircleIcon, LogoIcon } from "../../assets/icon";
import React from "react";
import { LinearGradient } from "react-native-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

interface AccountHeaderProps {
    onPress: () => void
}

export const AccountHeaderComponent = ({ onPress }: AccountHeaderProps) => {
    return (
        <View style={{ backgroundColor: "#f27c22", width: "100%", height: "40%", padding: 28, }}>
            <View style={{ flexDirection: "row", width: "100%" }}>
                {typeof onPress === "function" ?
                    (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity onPress={onPress}>
                                <LeftArrowCircleIcon width={30} height={30} />
                            </TouchableOpacity>
                            <Text>Voltar</Text>
                        </View>
                    )
                    :
                    (
                        <View style={{ width: "50%" }}>
                            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>Olá, Robertinho</Text>
                        </View>
                    )
                }
                <View style={{ alignItems: "flex-end", width: "50%" }}>
                    <View style={{ backgroundColor: "red" }}>
                        <LogoIcon width={48} height={48} />
                    </View>
                </View>

            </View>
            <View>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>Conta</Text>
                <Text style={{ color: "white", fontSize: 22 }}>R$8.998,00</Text>
            </View>
        </View>
    )
}