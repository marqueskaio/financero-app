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

    return (
        <ContainerComponent>
            <LoginBannerComponent height={"50%"} />
            <Text>Digite seus dados abaixo:</Text>
            <View style={{ paddingHorizontal: 40 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ width: '50%', paddingRight: 20 }}>
                        <Text>Nome:</Text>
                        <TextInput id="nome" style={{ backgroundColor: 'lightgrey' }} maxLength={34}></TextInput>
                    </View>
                    <View style={{ width: '50%', paddingRight: 20 }}>
                        <Text>Sobrenome:</Text>
                        <TextInput id="sobrenome" style={{ backgroundColor: 'lightgrey' }}></TextInput>
                    </View>
                </View>
                <View>
                    <Text>E-mail:</Text>
                    <TextInput id="email" style={{ backgroundColor: 'lightgrey', width: '70%' }}></TextInput>
                </View>
                <View>
                    <Text>Senha:</Text>
                    <TextInput id="senha" style={{ backgroundColor: 'lightgrey', width: '70%' }}></TextInput>
                </View>
                <View>
                    <Text>Confirmação de senha:</Text>
                    <TextInput id="confsenha" style={{ backgroundColor: 'lightgrey', width: '70%' }}></TextInput>
                </View>
                {/* <InputComponent width={"125%"} title={"Senha:"} value={password.pass1} password={password} setPassword={setPassword} />
                <InputComponent width={"125%"} title={"Confirmação de senha:"} value={password.pass2} password={password} setPassword={setPassword} /> */}
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
