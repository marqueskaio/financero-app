import {ContainerComponent} from "../../hoc/container-component";
import {View, Text, TextInput, Button, Image} from "react-native";
export const AuthScreen = () => {
  return (
    <ContainerComponent>
        <View style={{backgroundColor:"orange", width:"100%", height:"40%", flexDirection:"row", justifyContent: "center", alignItems:"center" }}>
            <Image source={require("../../assets/Logo.png")} style={{width:100,height:100, borderRadius:50, }}/>
            <Text style={{fontWeight:"bold", color:"white", fontSize:60}}>Financero</Text>
        </View>
        <View style={{paddingHorizontal:100,paddingVertical:100}}>
            <Text style={{fontWeight:"bold", alignItems:"flex-start"}}>E-mail:</Text>
            <TextInput style={{backgroundColor:"rgba(0,0,0,0.1)", borderRadius:4, marginBottom:8}} placeholder={"Digite seu E-mail"}/>
            <Text style={{fontWeight:"bold", alignItems:"flex-start"}}>Senha:</Text>
            <TextInput style={{backgroundColor:"rgba(0,0,0,0.1)", borderRadius:4,marginBottom:32}}placeholder={"Digite sua Senha"}/>
            <Button title={"Entrar"} color={"orange"}/>
            <Text style={{paddingVertical:20, textAlign:"center"}}>Ainda não possui conta?</Text>
            <Button title={"Criar Conta"} color={"orange"}/>
        </View>
    </ContainerComponent>
  )
}
