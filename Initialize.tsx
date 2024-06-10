import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from "./src/contexts/app-context";
import Auth from "./Auth";
import App from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";

if (__DEV__) {
    // @ts-ignore
    global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest
}

export const Initialize = () => {
    const [logged, setLogged] = useState(false)
    const [loadingPage, setLoadingPage] = useState(false)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('token').then((token) => {
            if (token) {
                setLogged(true)
            }
            setReady(true)
        })
    }, [])
    return (
        <NavigationContainer>
            <AppContext.Provider value={{logged, setLogged, loadingPage, setLoadingPage}}>
                {logged ? <App/> : <Auth/>}
            </AppContext.Provider>
        </NavigationContainer>
    )
}