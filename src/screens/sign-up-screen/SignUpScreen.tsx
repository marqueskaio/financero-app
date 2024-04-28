import React, { useState } from "react";
import { View, Text } from "react-native";
import { ContainerComponent } from "../../hoc/container-component";
import { LoginBannerComponent } from "../../components/login-banner-component";
import { InputComponent } from "../../hoc/input-component";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export const SignUpScreen = () => {
    const navigation = useNavigation<any>();
    const [hidePass, setHidePass] = useState(null);
    const showPassword = () => {
        setHidePass(hidePass => !hidePass);
    };
    const [password, setPassword] = useState({
        pass1: "",
        pass2: ""
    });

    return (
        <ContainerComponent>
            <LoginBannerComponent height={"50%"} />
            <Text>Digite seus dados abaixo:</Text>
            <View style={{ paddingHorizontal: 40 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: 'green' }}>
                    <View style={{ width: '50%', backgroundColor: 'red' }}>
                        <Text>Nome:</Text>
                        <TextInput style={{
                            backgroundColor: 'lightgrey',
                        }}>
                        </TextInput>
                    </View>
                    <View style={{ flexGrow: 1 }}>
                        <Text>Senha:</Text>
                        <TextInput style={{
                            backgroundColor: 'lightgrey',
                        }}></TextInput>
                    </View>
                </View>
                <InputComponent width={"140%"} title={"E-mail:"} />
                <InputComponent width={"125%"} title={"Senha:"} value={password.pass1} password={password} setPassword={setPassword} />
                <InputComponent width={"125%"} title={"Confirmação de senha:"} value={password.pass2} password={password} setPassword={setPassword} />
            </View>
            <TouchableOpacity

            >
                <View style={{ backgroundColor: "#f27c22", alignSelf: "center", margin: 4, padding: 8, borderRadius: 5 }}>
                    <Text style={{ color: "white" }}>
                        Criar Conta
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{
                flexDirection: "row",
                alignSelf: "center"
            }}>
                <Text>
                    Já tenho conta.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={{ color: "#f27c22" }}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </ContainerComponent>
    );
};
