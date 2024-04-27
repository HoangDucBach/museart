const Stack = createNativeStackNavigator();
import React, { useRef } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store";
import { useFonts } from "expo-font";
import { View, PanResponder, Animated } from "react-native";

import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import Artworks from "./screens/artworks/Artworks";
import Cart from "./screens/shopping/Cart";
import Exhibitions from "./screens/exhibitions/Exhibitions";
import Articles from "./screens/articles/Articles";
import Shopping from "./screens/shopping/Shopping";
import Payment from "./screens/shopping/Payment";
import NavbarBottom from "./components/footer/NavbarBottom";
import { Dimensions } from "react-native";

const App = () => {

  // const[hideNavarBottom, setHideNavarBottom] = React.useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;


  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

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
    <>
      <Provider store={store}>
        <NavigationContainer theme={DarkTheme}>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Artworks"
                component={Artworks}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Exhibitions"
                component={Exhibitions}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Articles"
                component={Articles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Shopping"
                component={Shopping}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
              />
            </Stack.Navigator>
          ) : null}
          <Animated.View style={{ opacity: fadeAnim }}>
            <NavbarBottom />
          </Animated.View>
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
