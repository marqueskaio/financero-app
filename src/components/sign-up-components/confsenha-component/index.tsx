import {Text, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import React from "react";
interface ConfSenhaComponentProps {
    value: string
    onChangeText: (value: string) => void
    hidePass: boolean

}

export const ConfSenhaComponent = ({value, onChangeText, hidePass}: ConfSenhaComponentProps) => {
    return (
        <View>
            <Text>Confirmação de senha:</Text>
            <TextInput
                secureTextEntry={hidePass}
                value={value}
                onChangeText={onChangeText}
                maxLength={24}
                style={{
                    backgroundColor: 'lightgrey',
                    width: '70%',
                    borderRadius: 4
                }}>
            </TextInput>
        </View>
    )
}