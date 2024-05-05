import React, {useState} from "react";
import {View, Text, Button, Alert} from "react-native";
import {ContainerComponent} from "../../hoc/container-component";
import {LoginBannerComponent} from "../../components/login-banner-component";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import {api} from "../../services/api";
import {NameComponent} from "../../components/sign-up-components/nome-component";
import {SobreNomeComponent} from "../../components/sign-up-components/sobrenome-component";
import {EmailComponent} from "../../components/sign-up-components/email-component";
import {SenhaComponent} from "../../components/sign-up-components/senha-component";
import {ConfSenhaComponent} from "../../components/sign-up-components/confsenha-component";
import {Dialog, Portal} from "react-native-paper";

export const SignUpScreen = () => {
    const navigation = useNavigation<any>();
    const [hidePass, setHidePass] = useState(true);

    const [signUpData, setSignUpData] = useState(
        {
            name: "",
            sobrenome: "",
            email: "",
            senha: "",
            confSenha: ""
        }
    )

    return (
        <ContainerComponent>
            <LoginBannerComponent height={"50%"}/>
            <Text>Digite seus dados abaixo:</Text>
            <View style={{paddingHorizontal: 40}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <NameComponent
                        value={signUpData.name}
                        onChangeText={(value) => {
                            setSignUpData({...signUpData, name: value})
                            console.log(signUpData)
                        }}/>
                    <SobreNomeComponent
                        value={signUpData.sobrenome}
                        onChangeText={(value) => {
                            setSignUpData({...signUpData, sobrenome: value})
                            console.log(signUpData)
                        }}/>
                </View>
                <EmailComponent
                    value={signUpData.email}
                    onChangeText={(value) => {
                        setSignUpData({...signUpData, email: value})
                        console.log(signUpData)
                    }}/>
                <SenhaComponent
                    setHidePass={setHidePass}
                    hidePass={hidePass}
                    value={signUpData.senha}
                    onChangeText={(value) => {
                        setSignUpData({...signUpData, senha: value})
                        console.log(signUpData)
                    }}/>
                <ConfSenhaComponent
                    hidePass={hidePass}
                    value={signUpData.confSenha}
                    onChangeText={(value) => {
                        setSignUpData({...signUpData, confSenha: value})
                        console.log(signUpData)
                    }}/>
                {/*<InputComponent width={"125%"} title={"Senha:"} value={password.pass1} password={password} setPassword={setPassword} />*/}
                {/*<InputComponent width={"125%"} title={"Confirmação de senha:"} value={password.pass2} password={password} setPassword={setPassword} />*/}
            </View>
            <TouchableOpacity
                onPress={() => {
                    {
                        signUpData.senha === signUpData.confSenha ?
                            (api.post("/user", signUpData).then((response) => {
                                console.log(response)
                            })) : (
                                <Portal>
                                    <Dialog>

                                    </Dialog>
                                </Portal>
                            )
                    }
                }}
            >
                <View style={{
                    backgroundColor: "#f27c22",
                    alignSelf: "center",
                    margin: 4,
                    padding: 8,
                    borderRadius: 5
                }}>
                    <Text style={{color: "white"}}>
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
                    <Text style={{color: "#f27c22"}}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </ContainerComponent>
    );
};
