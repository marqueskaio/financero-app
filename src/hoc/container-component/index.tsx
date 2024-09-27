import React from "react"
import {Dimensions, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

const {width,height} = Dimensions.get("window")
interface containerProps {
  children?: any
}

export const ContainerComponent = ({children}: containerProps) => {
  return (
      <ScrollView>
        <View style={{maxWidth:width,maxHeight:height}}>
          {children}
        </View>
      </ScrollView>
  )
}
