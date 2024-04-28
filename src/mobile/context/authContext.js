import axios from "axios";
import React, { createContext, useId, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoading } from "expo-font";
import { baseUrl } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setLoading] = useState(false);

    const signup = async (username, email, password, role) => {
        setLoading(true);

        await axios.post(`${baseUrl}/auth/signup`, {
            username, email, password, role
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setLoading(false);
            console.log(userInfo);
        }).catch(e => {
            setLoading(false);
            console.log(`sign up error: ${e}`);
        });
    }

    const signin = async (email, password) => {
        setLoading(true);

        await axios.post(`${baseUrl}/auth/signin`, {
            email,
            password,
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setLoading(false);
            console.log(userInfo);
        }).catch(e => {
            console.log(`signin error: ${e}`);
            setLoading(false);
        })
    }
    return (
        <AuthContext.Provider value={{ isLoading, userInfo, signup, signin }}>{children}</AuthContext.Provider>
    );
}