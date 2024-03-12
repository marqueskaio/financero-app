import { AccountHeaderComponent } from "../../components/account-header-component";
import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ContainerComponent } from "../../hoc/container-component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { InputComponent } from "../../hoc/input-component";

export const MyRegistersScreen = () => {
    const navigation = useNavigation<any>()
    const [hover, setHover] = useState<any>(false)
    let despesaColor = !hover ? "grey" : "#f27c22"
    let receitaColor = hover ? "grey" : "#f27c22"

    return (
        <ContainerComponent>
            <AccountHeaderComponent onPress={() => navigation.navigate("HomeScreen")} />
            <View>
                <Text style={{ fontSize: 32, fontWeight: "bold", color: "#f27c22", alignSelf: "center" }}>
                    Meus Registros
                </Text>
            </View>
            <View style={{ justifyContent: "space-evenly", flexDirection: "row", marginVertical: 16 }}>
                <TouchableOpacity onPress={() => setHover(false)}>
                    <View style={{ backgroundColor: receitaColor, width: 164, alignItems: "center", borderRadius: 4, padding: 4 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>
                            Registrar Receita
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setHover(true)}>
                    <View style={{ backgroundColor: despesaColor, width: 184, alignItems: "center", borderRadius: 4, padding: 4 }}>
                        <Text style={{ color: "white", fontSize: 20 }}>
                            Registrar Despesas
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 24 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <InputComponent title={"Valor"} width={"75%"} />
                    <InputComponent title={"Data"} width={"75%"} />
                </View>
                <View>
                    <InputComponent title={"Descrição"} width={"200%"} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 24, alignItems: "flex-end", paddingTop: 24 }}>
                <Button color="#f27c22" title="Registrar" />
            </View>
            <View style={{
                padding: 10,
                paddingHorizontal: 30,
                width: "100%",
                height: 170,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View style={{}}>
                    <Text>
                        Entradas
                    </Text>
                </View>
                <View style={{}}>
                    <Text>
                        Saídas
                    </Text>
                </View>

            </View>
            <View style={{alignItems: 'center'}}>
                <Text>
                    Total Jan
                </Text>
            </View>
        </ContainerComponent>
    )
}
