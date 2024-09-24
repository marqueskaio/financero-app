import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../contexts/user-context";
import { ClosedEyeIcon, OpenEyeIcon } from "../../assets/icon";

export const LoginFormComponent = () => {
    const { user, setUser } = useContext(UserContext)
    const [hidePass, setHidePass] = useState(true)
    const showPassword = () => {
        setHidePass(hidePass => !hidePass)
    }

    return (
        <>
            <Text style={{ fontWeight: "bold", alignItems: "flex-start" }}>E-mail:</Text>
            <TextInput
                //value={user?.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
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
        </>
    )
}