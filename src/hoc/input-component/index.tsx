import { View, Text, TextInput } from "react-native"
import { ClosedEyeIcon, OpenEyeIcon } from "../../assets/icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

interface InputProps {
    value?: string
    password?: any
    setPassword?: (data:any) => void
    title: string
    placeHolder?: string
    width?: string
    borderRadius?: string
    backgroundColor?: string
}
export const InputComponent = ({ title, placeHolder, width, password, setPassword, value }: InputProps) => {
    const [hidePassword, setHidePassword] = useState(true)
    const showPassword = () => {
        setHidePassword(hidePassword => !hidePassword)
    }
    return (
        <View style={{ width: "50%" }}>
            <Text>{title}</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    value={value}
                    onChangeText={(value) => {setPassword({...password, pass1: value}), console.log(password.pass1, password.pass2)}}
                    maxLength={24}
                    secureTextEntry={title === 'Senha:' || title === 'Confirmação de senha:' ? (hidePassword ? true : false) : false}
                    style={{
                        backgroundColor: "lightgrey",
                        width: !width ? "100%" : width,
                        borderRadius: 0
                    }}>
                </TextInput>
                <View style={{ backgroundColor: 'lightgrey', alignItems: 'center', flexDirection: 'row' }}>
                    {title === 'Senha:' || title === 'Confirmação de senha:' ?
                        (<TouchableOpacity
                            onPress={showPassword}>
                            {hidePassword ?
                                <ClosedEyeIcon /> :
                                <OpenEyeIcon />}
                        </TouchableOpacity>) : null
                    }
                </View>
            </View>
        </View >
    )
}
