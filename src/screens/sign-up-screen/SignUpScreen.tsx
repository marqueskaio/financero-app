import React, {useContext, useState} from "react";
import {View, Text, Alert} from "react-native";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppContext} from "../../contexts/app-context";


export const SignUpScreen = () => {
    const navigation = useNavigation<any>();
    const [hidePass, setHidePass] = useState(true);
    const {setLogged} = useContext(AppContext)
    const [signUpData, setSignUpData] = useState(
        {
            name: "",
            undername: "",
            email: "",
            password: "",
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
                        value={signUpData.undername}
                        onChangeText={(value) => {
                            setSignUpData({...signUpData, undername: value})
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
                    value={signUpData.password}
                    onChangeText={(value) => {
                        setSignUpData({...signUpData, password: value})
                        console.log(signUpData)
                    }}/>
                <ConfSenhaComponent
                    hidePass={hidePass}
                    value={signUpData.confSenha}
                    onChangeText={(value) => {
                        setSignUpData({...signUpData, confSenha: value})
                        console.log(signUpData)
                    }}/>
            </View>
            <TouchableOpacity

                onPress={() => {
                    {
                        signUpData.password === signUpData.confSenha ?
                            (api.post("sign-up/user", {
                                name: signUpData.name,
                                undername: signUpData.undername,
                                email: signUpData.email,
                                password: signUpData.password
                            }).then(async (response) => {
                                await AsyncStorage.setItem('user', JSON.stringify(response?.data))
                                await AsyncStorage.setItem('token', response?.data?.accessToken)
                                setLogged(true)
                            }).catch((e) => {
                                console.log(e)
                            })
                            ) : (
                                Alert.alert("Senha não confere!",
                                    "Verifique e tente novamente.",
                                    [
                                        {text: 'Cancel'},
                                        {text: 'OK'}
                                    ]
                                )
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
