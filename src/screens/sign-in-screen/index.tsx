import React, { useContext } from "react";
import { ContainerComponent } from "../../hoc/container-component";
import { LoginFormComponent } from "../../components/login-form-component";
import { LoginBannerComponent } from "../../components/login-banner-component";
import { View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/user-context";
import { api } from "../../services/api"
import {AppContext} from "../../contexts/app-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignInScreen = () => {
  const navigate = useNavigation<any>()
  const { user } = useContext(UserContext)
  const { logged, setLogged } = useContext(AppContext)

  return (
    <ContainerComponent>
      <LoginBannerComponent />
      <View
        style={{ paddingHorizontal: 80, paddingVertical: 100 }}>
        <LoginFormComponent />
      </View>
    </ContainerComponent>
  )
}
