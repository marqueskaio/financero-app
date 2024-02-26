import { View, Text, TextInput } from "react-native"
import {ClosedEyeIcon, OpenEyeIcon} from "../../assets/icon";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useState} from "react";

interface InputProps {
    title: string
    placeHolder?: string
    width?: string
    isPassword?: boolean
}
export const InputComponent = ({title, placeHolder, width, isPassword}: InputProps) => {
    const [showPassword, setShowPassword] = useState(isPassword)
    return(
        <View style={{
            width: "50%",
        }}>
                <Text>{title}</Text>
            <View style={{flexDirection:"row"}}>
                <TextInput
                    maxLength={40}
                    secureTextEntry={isPassword}
                    style={{
                        backgroundColor: "lightgrey",
                        width:!width ? "100%" : width,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                    }}>
                </TextInput>
                <View style={{
                        backgroundColor: "lightgrey",
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                }}>
                    {/*{isPassword ? (*/}
                    {/*    {showPassword ? (*/}
                    {/*        <TouchableOpacity onPress={()=> setShowPassword(false)}>*/}
                    {/*            <OpenEyeIcon/>*/}
                    {/*        </TouchableOpacity>*/}
                    {/*        ) : (*/}
                    {/*        <TouchableOpacity onPress={()=> setShowPassword(true)}>*/}
                    {/*            <ClosedEyeIcon/>*/}
                    {/*        </TouchableOpacity>*/}
                    {/*        )*/}
                    {/*    }) : null*/}
                    {/*}*/}
                </View>
            </View>
        </View>
    )
}
