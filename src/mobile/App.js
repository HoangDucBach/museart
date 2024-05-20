import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { useFonts } from "expo-font";

import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import Cart from "./screens/shopping/Cart";
import Payment from "./screens/shopping/Payment";
import { StatusBar } from "react-native";
import { AuthContext, AuthProvider } from "./context/authContext";
import HomeTabs from "./navigation/HomeTabs";
import RequireAuthentication from "./navigation/RequireAuth";
import { MyDarkTheme, MyLightTheme } from "./GlobalStyles";

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const userToken = useContext(AuthContext).userToken;
  return (
      <NavigationContainer theme={isDarkMode ? MyDarkTheme : MyLightTheme}>
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
      </NavigationContainer>
  );
}

const App = () => {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "PlayfairDisplay-Medium": require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-Regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  } else console.log("Fonts loaded");

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Provider>
  );

};
export default App;
