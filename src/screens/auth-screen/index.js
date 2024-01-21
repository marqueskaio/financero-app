import React from "react";
import {ContainerComponent} from "../../hoc/container-component";
import {View, Text, Button, Image} from "react-native";
import {LoginFormComponent} from "../../components/login-form-component";
import {LoginBannerComponent} from "../../components/login-banner-component";
export const AuthScreen = () => {
  return (
    <ContainerComponent>
       <LoginBannerComponent/>
        <View
            style={{paddingHorizontal:100,paddingVertical:100}}>
            <LoginFormComponent/>
            <Button
                title={"Entrar"}
                color={"orange"}/>
            <Text
                style={{paddingVertical:20, textAlign:"center"}}>Ainda não possui conta?</Text>
            <Button
                title={"Criar Conta"}
                color={"orange"}/>
        </View>
    </ContainerComponent>
  )
}
