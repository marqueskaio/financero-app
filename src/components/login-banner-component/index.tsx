import { Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface props {
    height?: string,
    width?: string
}

export const LoginBannerComponent = ({ height, width }: props) => {
    return (
        <LinearGradient
            colors={["#C54607", "#D45810", "#E36B19", "#F17B22"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.7, y: 0 }}
            style={{
                width: !width ? "100%" : width,
                height: !height ? "40%" : height,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Image
                source={require("../../assets/Logo.png")}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                }} />
            <Text
                style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 60
                }}>Financeiro</Text>
        </LinearGradient>
    )
}
