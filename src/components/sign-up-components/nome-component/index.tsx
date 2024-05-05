import {Text, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import React from "react";

interface NameComponentProps {
    value: string
    onChangeText: (value: string) => void
}

export const NameComponent = ({value, onChangeText}: NameComponentProps) => {
    return (
        <View style={{width: '50%', paddingRight: 20}}>
            <Text>Nome:</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                maxLength={14}
                style={{
                    backgroundColor: 'lightgrey',
                    borderRadius: 4
                }}
            >
            </TextInput>
        </View>
    )
}