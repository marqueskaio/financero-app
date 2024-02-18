import React from "react"
import {View} from "react-native";

interface containerProps {
  children?: any
}

export const ContainerComponent = ({children}: containerProps) => {
  return (
    <View>
      {children}
    </View>
  )
}