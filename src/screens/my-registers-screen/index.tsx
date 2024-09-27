import { AccountHeaderComponent } from "../../components/account-header-component";
import {View, Text, Button, TextInput} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ContainerComponent } from "../../hoc/container-component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { InputComponent } from "../../hoc/input-component";
import {api} from "../../services/api";
import IncomesTable from "../../tables/incomes-table/incomes-table";

export const MyRegistersScreen = () => {
    const navigation = useNavigation<any>()
    const [receita, setReceita] = useState<any>({value: 0, data: "", description: "", category: "any"})
    const [hover, setHover] = useState<any>(false)
    let despesaColor = !hover ? "grey" : "#f27c22"
    let receitaColor = hover ? "grey" : "#f27c22"

    const registrarCompra = (receita: any) => {
        api.post("/incomes", receita).then((response) => {
            setReceita({value: 0, data: "", description: "", category: "any"})
            console.log(response)
        })
    }

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
                    <TextInput value={receita.value} onChangeText={(text) => setReceita({...receita, value: text})} placeholder="Valor" style={{ width: "50%", borderBottomWidth: 1, borderBottomColor: "grey" }} />
                    <TextInput value={receita.data} onChangeText={(text) => setReceita({...receita, data: text})} placeholder="Data" style={{ width: "50%", borderBottomWidth: 1, borderBottomColor: "grey" }} />
                </View>
                <View style={{justifyContent: "space-evenly"}}>
                    <TextInput value={receita.description} onChangeText={(text) => setReceita({...receita, description: text})} placeholder="Descrição" style={{ marginTop: 8, alignSelf: "flex-start", width: "80%", borderBottomWidth: 1, borderBottomColor: "grey" }} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 24, alignItems: "flex-end", paddingTop: 24 }}>
                <Button color="#f27c22" title="Registrar" onPress={() => registrarCompra(receita)}/>
            </View>
                <IncomesTable/>
        </ContainerComponent>
    )
}
