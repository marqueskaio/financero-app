import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const api = axios.create({baseURL: "http://localhost:3333/api"})

api.interceptors.request.use(async (httpRequest) => {
    const accessToken = await AsyncStorage.getItem("token")

    if (accessToken) {
        httpRequest.headers["x-access-token"] = accessToken
    }
    httpRequest.headers["Content-Type"] = "application/json"

    return httpRequest
})

export { api }