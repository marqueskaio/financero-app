import {Image, Text, View} from "react-native";

interface props {
    height?:string,
    width?:string
}

export const LoginBannerComponent = ({height, width}:props) =>{
    return(
        <View
            style={{
                backgroundColor:"#f27c22",
                width:!width ? "100%" : width,
                height:!height ? "40%" : height,
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
