import React, {useContext} from "react";
import {ActivityIndicator, View} from "react-native";
import {AppContext} from "../../contexts/app-context";

export const LoadingComponent = () => {
    const {loadingPage} = useContext(AppContext)

    if (!loadingPage) return null

    return  (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',  position: "absolute", left: 0, top: 0, right: 0, bottom: 0, backgroundColor: "rgba(28,28,28,0.6)"}}>
            <ActivityIndicator size="large" color={"rgba(28,28,28,0.35)"} />
        </View>
    )
}