import { createContext } from "react";
import { UserModel } from "../types/UserModel";

export const InitialUserState: UserModel = {
    name: "",
    email: "",
    role: "",
    password: ""
}

export const UserContext = createContext({
    user: InitialUserState, setUser: (data: UserModel) => {}
})