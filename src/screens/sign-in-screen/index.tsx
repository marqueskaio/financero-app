import React, {useContext, useState} from "react";
import { ContainerComponent } from "../../hoc/container-component";
import { LoginFormComponent } from "../../components/login-form-component";
import { LoginBannerComponent } from "../../components/login-banner-component";
import { View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/user-context";
import { api } from "../../services/api"

export const SignInScreen = () => {
  const navigate = useNavigation<any>()
  const { user } = useContext(UserContext)

  return (
    <ContainerComponent>
      <LoginBannerComponent />
      <View
        style={{ paddingHorizontal: 100, paddingVertical: 100 }}>
        <LoginFormComponent />
        <Button
          onPress={() => {
            api.post("/sign-in", {
              email: user.email
            }).then((response) => {
              console.log(response)
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
      </View>
    </ContainerComponent>
  )
}
