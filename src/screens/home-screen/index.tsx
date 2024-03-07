import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Divider} from 'react-native-paper';
import {ContainerComponent} from "../../hoc/container-component";
import {AccountHeaderComponent} from "../../components/account-header-component";
import {useNavigation} from "@react-navigation/native";


export const HomeScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <ContainerComponent>
            <AccountHeaderComponent/>
            <View style={{
                width: "100%",
                height: "40%"
            }}>
                <View style={{
                    backgroundColor: "#f27c22",
                    width: 160,
                    margin: 28,
                    padding: 8,
                    borderRadius: 10
                }}>
                    <Text style={{color: "white",
                        fontSize: 22,
                        fontWeight: "bold"
                    }}>Receita total</Text>
                    <Text style={{color: "white",
                        fontSize: 22
                    }}>R$8.998,00</Text>
                </View>
                <View style={{
                    backgroundColor: "#f27c22",
                    width: 160,
                    marginHorizontal: 28,
                    padding: 8,
                    borderRadius: 10
                }}>
                    <Text style={{color: "white", fontSize: 22, fontWeight: "bold"}}>Despesa Total</Text>
                    <Text style={{color: "white", fontSize: 22,}}>R$8.998,00</Text>
                </View>
                <View style={{backgroundColor: "#f27c22", width: 120, margin: 28, padding: 8, borderRadius: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyRegisters")}>
                        <Text style={{color: "white", fontSize: 18, textAlign: "center"}}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Divider/>
            <View style={{width: "100%", height: "40%", margin: 28}}>
                <View>
                    <TouchableOpacity>
                        <Text style={{fontWeight: "bold", fontSize: 24}}>Cartão de crédito</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontSize: 20}}>Fatura atual</Text>
                    <Text style={{fontSize: 20}}>R$8.998,00</Text>
                </View>
                <View>
                    <Text>Vencimento 23 JAN.</Text>
                    <Text>Limite disponível de R$14.000,00</Text>
                </View>
            </View>
        </ContainerComponent>
    )
}
