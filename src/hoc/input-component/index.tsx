import { View, Text, TextInput } from "react-native"

interface InputProps {
    title: string
    placeHolder?: string
}

export const InputComponent = ({title, placeHolder}: InputProps) => {
    return(
        <View>
            <Text>{title}</Text>
            <TextInput style={{backgroundColor: "lightgrey"}}></TextInput>
        </View>
    )
} 