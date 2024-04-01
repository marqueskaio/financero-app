import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const api = axios.create({baseURL: "http://localhost:3333/api"})

api.interceptors.request.use(async (httpRequest) => {
    const token = await AsyncStorage.getItem("token")

    if (token) {
        httpRequest.headers["x-access-token"] = token
    } httpRequest.headers["Content-Type"] = "aplication/json"

    return httpRequest
})

export { api }