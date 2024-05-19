import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { localhost } from '../services/api';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const signup = async (username, email, password, role) => {
    setLoading(true);
    try {
      const res = await axios.post(`${localhost}/auth/signup`, { username, email, password, role });
      const userInfo = res.data;
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setUserToken(userInfo.token);
      await AsyncStorage.setItem('userToken', userInfo.token);
    } catch (e) {
      console.log(`sign up error: ${e}`);
      return Alert.alert("All field are required.", "Email must be valid and Password must be at least 6 characters long.");
    } finally {
      setLoading(false);
    }
  };

  const signin = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${localhost}/auth/signin`, { email, password });
      const userInfo = res.data;
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setUserToken(userInfo.token);
      await AsyncStorage.setItem('userToken', userInfo.token);
    } catch (e) {
      console.log(`sign in error: ${e}`);
      return Alert.alert("All field are required.", "Email must be valid and Password must be at least 6 characters long.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setUserToken(null);
    await AsyncStorage.removeItem('userInfo');
    await AsyncStorage.removeItem('userToken');
    setLoading(false);
  };

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
        if (userToken && userInfo) {
          setUserToken(userToken);
          setUserInfo(userInfo);
        }
      } catch (e) {
        console.log(`load user data error: ${e}`);
      }
    };
    loadUserData();
  }, []);

  console.log('user token: ', userToken);

  return (
    <AuthContext.Provider value={{ signin, signup, logout, isLoading, userInfo, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
