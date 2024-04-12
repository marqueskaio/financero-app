import { View, Text, TextInput } from "react-native"
import { ClosedEyeIcon, OpenEyeIcon } from "../../assets/icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

interface InputProps {
    title: string
    placeHolder?: string
    width?: string
}
export const InputComponent = ({ title, placeHolder, width }: InputProps) => {
    const [hidePassword, setHidePassword] = useState(true)
    const showPassword = () => {
        setHidePassword(hidePassword => !hidePassword)
    }
    return (
        <View style={{ width: "50%" }}>
            <Text>{title}</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    maxLength={40}
                    secureTextEntry={title === 'Senha:' ? (hidePassword ? true : false) : false}
                    style={{
                        backgroundColor: "lightgrey",
                        width: !width ? "100%" : width,
                        borderRadius: 5,
                    }}>
                </TextInput>
                        {title === 'Senha:' ?
                            (<TouchableOpacity
                                onPress={showPassword}>
                                {hidePassword ?
                                    <ClosedEyeIcon /> :
                                    <OpenEyeIcon />}
                            </TouchableOpacity>) : null
                        }
            </View>
        </View >
    )
}
