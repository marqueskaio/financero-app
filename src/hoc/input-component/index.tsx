import { View, Text, TextInput } from "react-native"

interface InputProps {
    title: string
    placeHolder?: string
    width?: string
}

export const InputComponent = ({title, placeHolder, width}: InputProps) => {
    return(
        <View>
            <Text>{title}</Text>
            <TextInput
                style={{
                    backgroundColor: "lightgrey",
                    width:!width ? "100%" : width,
                    
                }}>

            </TextInput>
        </View>
    )
} 