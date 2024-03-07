import React from "react";
import {ContainerComponent} from "../../hoc/container-component";
import {LoginFormComponent} from "../../components/login-form-component";
import {LoginBannerComponent} from "../../components/login-banner-component";
import {View, Button, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const SignInScreen = () => {
  const navigate = useNavigation<any>()

  return (
    <ContainerComponent>
       <LoginBannerComponent/>
        <View
            style={{paddingHorizontal:100,paddingVertical:100}}>
            <LoginFormComponent/>
            <Button
                title={"Entrar"}
                color={"#f27c22"}/>
            <Text
                style={{paddingVertical:20, textAlign:"center"}}>Ainda não possui conta?</Text>
            <Button
                onPress={() => navigate.navigate("SignUp")}
                title={"Criar Conta"}
                color={"#f27c22"}/>
        </View>
    </ContainerComponent>
  )
}
