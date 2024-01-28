import {Text, TextInput} from "react-native";

export const LoginFormComponent = () => {
    return(
        <>
            <Text
                style={{fontWeight:"bold", alignItems:"flex-start"}}>E-mail:</Text>
            <TextInput
                style={{backgroundColor:"rgba(0,0,0,0.1)", borderRadius:4, marginBottom:8}}
                placeholder={"Digite seu E-mail"}/>
            <Text
                style={{fontWeight:"bold", alignItems:"flex-start"}}>Senha:</Text>
            <TextInput
                style={{backgroundColor:"rgba(0,0,0,0.1)", borderRadius:4,marginBottom:32}}
                placeholder={"Digite sua Senha"}/>
        </>
    )
}
