import {Text, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import React from "react";

interface EmailComponentProps {
    value: string
    onChangeText: (value: string) => void
}

export const EmailComponent = ({value, onChangeText}: EmailComponentProps) => {
    return (
        <View>
            <Text>E-mail:</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                maxLength={34}
                style={{
                    backgroundColor: 'lightgrey',
                    width: '70%',
                    borderRadius: 4
                }}
            >

            </TextInput>
        </View>
    )
}