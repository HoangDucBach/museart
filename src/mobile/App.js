import React, { useContext, useEffect, useRef, useState } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { useFonts } from "expo-font";

import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import Cart from "./screens/shopping/Cart";
import Payment from "./screens/shopping/Payment";
import { ActivityIndicator, Dimensions, StatusBar, View } from "react-native";
import { AuthContext } from "./context/authContext";
import HomeTabs from "./navigation/HomeTabs";
import RequireAuthentication from "./navigation/RequireAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { localhost } from "./services/api";
import axios from "axios";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const signup = async (username, email, password, role) => {
    setLoading(true);
    try {
      const res = await axios.post(`${localhost}/auth/signup`, {
        username, email, password, role
      });
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setUserToken(userInfo.token);
      AsyncStorage.setItem('userToken', userInfo.token);
      console.log(res.data);
      setLoading(false);
    } catch (e) {
      console.log(`sign up error: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  const signin = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${localhost}/auth/signin`, {
        email, password
      });
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setUserToken(userInfo.token);
      AsyncStorage.setItem('userToken', userInfo.token);
      console.log(userInfo);
      console.log(userToken);
    } catch (e) {
      console.log(`sign in error: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    setLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setLoading(false);
  }

  useEffect(() => { signin; signup; }, []);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "PlayfairDisplay-Medium": require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-Regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  } else console.log("Fonts loaded");

  console.log(userToken);

  return (
    <AuthContext.Provider value={{ signin, signup, logout, isLoading, userInfo, userToken }}>
      <NavigationContainer theme={DarkTheme}>
        <Provider store={store}>
          <StatusBar />
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={userToken != null ? "Home" : "SignIn"}>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
            />
            <Stack.Screen
              name="Cart"
              component={RequireAuthentication(Cart, userToken)}
            />
            <Stack.Screen
              name="Payment"
              component={RequireAuthentication(Payment, userToken)}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
