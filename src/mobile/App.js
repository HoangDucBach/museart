const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, Pressable, TouchableOpacity } from "react-native";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Artworks from "./screens/Artworks";
import Cart from "./screens/Cart";
import Exhibitions from "./screens/Exhibitions";
import Articles from "./screens/Articles";
import Shopping from "./screens/Shopping";
import Payment from "./screens/Payment";
import NavbarBottom from "./components/NavbarBottom";
import { Dimensions } from "react-native";

const App = () => {
  console.log(Dimensions.get("screen"));
  
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
      <NavigationContainer style ={{color: "black"}}>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name = "SignUp"
              component={SignUp}
              options={{ headerShown: false}}
            />
            <Stack.Screen
              name="Artworks"
              component={Artworks}
              options={{headerShown: false}}
              />
              <Stack.Screen
              name="Exhibitions"
              component={Exhibitions}
              options={{headerShown: false}}
              />
              <Stack.Screen
              name="Articles"
              component={Articles}
              options={{headerShown: false}}
              />
            <Stack.Screen
              name="Shopping"
              component={Shopping}
              options={{headerShown: false}}
              />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
        {<NavbarBottom/>}
      </NavigationContainer>
    </>
  );
};
export default App;
