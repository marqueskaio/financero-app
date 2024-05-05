import {Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import React, {useContext, useState} from "react";
import {ClosedEyeIcon, OpenEyeIcon} from "../../../assets/icon";
import {UserContext} from "../../../contexts/user-context";

interface SenhaComponentProps {
    value: string
    onChangeText: (value: string) => void
    setHidePass: (hidePass: any) => void
    hidePass: any
}

export const SenhaComponent = ({value, onChangeText, setHidePass, hidePass}: SenhaComponentProps) => {
    const {user, setUser} = useContext(UserContext)

    const showPassword = () => {
        setHidePass((hidePass: any) => !hidePass);
    };

    return (
        <View>
            <Text>Senha:</Text>
            <View style={{
                width: '70%',
                flexDirection: 'row',
                backgroundColor: 'lightgrey',
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
            }}>
                <TextInput
                    secureTextEntry={hidePass}
                    value={value}
                    onChangeText={onChangeText}
                    maxLength={24}
                    style={{
                        // backgroundColor: 'red',
                        width: '87%',

                    }}>
                </TextInput>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center'
                    }}
                    onPress={showPassword}>
                    {hidePass ?
                        <ClosedEyeIcon/> :
                        <OpenEyeIcon/>}
                </TouchableOpacity>
            </View>
        </View>
    )
}