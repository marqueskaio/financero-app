import {Text, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import React from "react";

interface SobreNomeComponentProps {
    value: string
    onChangeText: (value: string) => void
}

export const SobreNomeComponent = ({value, onChangeText}: SobreNomeComponentProps) => {
    return (
        <View style={{width: '50%', paddingRight: 20}}>
            <Text>Sobrenome:</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                maxLength={34}
                style={{
                    backgroundColor: 'lightgrey',
                    borderRadius: 4
                }}
            >
            </TextInput>
        </View>
    )
}