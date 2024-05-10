import React, { useContext, useRef, useState } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { useFonts } from "expo-font";

import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import Cart from "./screens/shopping/Cart";
import Payment from "./screens/shopping/Payment";
import { ActivityIndicator, Dimensions, View } from "react-native";
import { AuthContext } from "./context/authContext";
import HomeTabs from "./navigation/HomeTabs";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(true);
  /*
      const signup = async (username, email, password, role) => {
          setLoading(true);
  
          await axios.post(`${localhost}/auth/signup`, {
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
  
          await axios.post(`${localhost}/auth/signin`, {
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
  */
  const signin = () => {
    setUserToken('usiriuefs');
    //console.log(userToken);
    setLoading(false);
    console.log(isLoading);
  }

  const logout = () => {
    setUserToken(null);
    setLoading(false);
  }

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
    <AuthContext.Provider value={{ signin, logout, isLoading, userToken }}>
      <NavigationContainer theme={DarkTheme}>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            {userToken != null ?
              <>
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen
                  name="Cart"
                  component={Cart}
                />
                <Stack.Screen
                  name="Payment"
                  component={Payment}
                />
              </>
              :
              <>
                <Stack.Screen
                  name="SignIn"
                  component={SignIn}
                />
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                />
              </>
            }
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
