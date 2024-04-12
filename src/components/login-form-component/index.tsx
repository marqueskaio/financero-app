import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../contexts/user-context";
import { ClosedEyeIcon, OpenEyeIcon } from "../../assets/icon";

export const LoginFormComponent = () => {
    const { user, setUser } = useContext(UserContext)
    const [hidePass, setHidePass] = useState(null)
    const showPassword = () => {
        setHidePass(hidePass => !hidePass)
    }

    return (
        <>
            <Text
                style={{ fontWeight: "bold", alignItems: "flex-start" }}>E-mail:</Text>
            <TextInput
                //value={user?.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
                style={{ backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 4, marginBottom: 8, paddingHorizontal: 8 }}
                placeholder={"Digite seu E-mail"} />
            <Text
                style={{ fontWeight: "bold" }}>Senha:</Text>
            <View style={{
                paddingHorizontal: 8,
                alignItems: 'center',
                borderRadius: 4,
                backgroundColor: "rgba(0,0,0,0.1)",
                flexDirection: 'row',
                marginBottom: 30
                }}>
                <TextInput
                    secureTextEntry={hidePass ? true : false}
                    style={{ width: '100%', flexShrink: 1 }}
                    placeholder={"Digite sua Senha"} />
                <TouchableOpacity
                    onPress={showPassword}>
                    {hidePass ?
                        <ClosedEyeIcon /> :
                        <OpenEyeIcon />}
                </TouchableOpacity>
            </View>
        </>
    )
}
