import {Text} from "react-native";
import {ContainerComponent} from "../../hoc/container-component";

export const AuthScreen = () => {
  return (
    <ContainerComponent>
      <Text style={{margin: 100}}>Login</Text>
    </ContainerComponent>
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    // </View>
  )
}