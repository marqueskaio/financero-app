import React from "react"
import {Dimensions, View} from "react-native";

const {width,height} = Dimensions.get("window")
interface containerProps {
  children?: any
}

export const ContainerComponent = ({children}: containerProps) => {
  return (
    <View style={{maxWidth:width,maxHeight:height}}>
      {children}
    </View>
  )
}
