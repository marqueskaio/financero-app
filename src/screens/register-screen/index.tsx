import React, { useState } from "react"
import { View, Text, TextInput} from "react-native"
import { ContainerComponent } from "../../hoc/container-component"
import { LoginBannerComponent } from "../../components/login-banner-component"
import { InputComponent } from "../../hoc/input-component"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

export const RegisterScreen = () => {
    const navigation = useNavigation<any>()

    return (
        <ContainerComponent>
            <LoginBannerComponent height={"50%"}/>
            <Text>Digite seus dados abaixo:</Text>
            <View style={{
                paddingHorizontal: 40,
            }}>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                }}>
                    <InputComponent width={"90%"} title={"Nome:"}/>
                    <InputComponent width={"100%"}  title={"Sobrenome:"}/>
                </View>
                    <InputComponent width={"140%"} title={"E-mail:"}/>
                    <InputComponent width={"140%"} title={"Senha:"} isPassword={true}/>
            </View>
            <TouchableOpacity>
                <View style={{backgroundColor:"orange", alignSelf:"center", margin:4, padding:8, borderRadius:5,}}>
                    <Text style={{color:"white"}}>
                        Criar Conta
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{
                flexDirection:"row",
                alignSelf:"center"
            }}>
                <Text>
                    Já tenho conta.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
                    <Text style={{color:"orange"}}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </ContainerComponent>
    )
}
