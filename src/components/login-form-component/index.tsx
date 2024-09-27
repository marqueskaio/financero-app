import React, { useContext, useState } from "react";
import {BackHandler, Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import { UserContext } from "../../contexts/user-context";
import { ClosedEyeIcon, OpenEyeIcon } from "../../assets/icon";
import {api} from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppContext} from "../../contexts/app-context";
import {useFocusEffect, useNavigation} from "@react-navigation/native";

export const LoginFormComponent = () => {
    const { user, setUser } = useContext(UserContext)
    const [loginUser, setLoginUser] = useState({ email: "", password: "" })
    const [hidePass, setHidePass] = useState(true)
    const { setLogged } = useContext(AppContext)
    const navigate = useNavigation<any>()
    const showPassword = () => {
        setHidePass(hidePass => !hidePass)
    }



    return (
        <>
            <Text style={{ fontWeight: "bold", alignItems: "flex-start" }}>E-mail:</Text>
            <TextInput
                value={loginUser?.email}
                onChangeText={(text) => setLoginUser((prevState) => ({ ...prevState, email: text }))}
                style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                marginBottom: 8,
                borderRadius: 4,
                paddingHorizontal: 8
            }}
                placeholder={"Digite seu E-mail"} />
            <Text
                style={{ fontWeight: "bold" }}>Senha:</Text>
            <View style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                paddingHorizontal: 8,
                alignItems: 'center',
                borderRadius: 4,
                flexDirection: 'row',
                marginBottom: 30
            }}>
                <TextInput
                    value={loginUser?.password}
                    onChangeText={(text) => setLoginUser((prevState) => ({ ...prevState, password: text }))}
                    secureTextEntry={hidePass}
                    style={{ width: '100%', flexShrink: 1, paddingRight: 4 }}
                    placeholder={"Digite sua senha"} />
                <TouchableOpacity
                    onPress={showPassword}>
                    {hidePass ?
                        <ClosedEyeIcon /> :
                        <OpenEyeIcon />}
                </TouchableOpacity>
            </View>
            <Button
                onPress={() => {
                    api.post("/sign-in", loginUser)
                        .then(async (response) => {
                        console.log(response)
                        await AsyncStorage.setItem('user', JSON.stringify(response?.data))
                        await AsyncStorage.setItem('token', response?.data?.accessToken)
                        setLogged(true)
                    }).catch((erro) => {
                        console.log(erro)
                    })
                }}
                title={"Entrar"}
                color={"#f27c22"} />
            <Text
                style={{ paddingVertical: 20, textAlign: "center" }}>Ainda não possui conta?</Text>
            <Button
                onPress={() => navigate.navigate("SignUp")}
                title={"Criar Conta"}
                color={"#f27c22"} />
        </>
    )
}