import {Image, Text, View} from "react-native";

export const LoginBannerComponent = () =>{
    return(
        <View
            style={{
                backgroundColor:"orange",
                width:"100%",
                height:"40%",
                flexDirection:"row",
                justifyContent: "center",
                alignItems:"center"
            }}>
            <Image
                source={require("../../assets/Logo.png")}
                style={{
                    width:100,
                    height:100,
                    borderRadius:50,
                }}/>
            <Text
                style={{
                    fontWeight:"bold",
                    color:"white",
                    fontSize:60}}>Financero</Text>
        </View>
    )
}
