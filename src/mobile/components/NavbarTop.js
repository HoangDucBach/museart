import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const NavbarTop = () => {
  
  const onBackPress = () => {console.log("Click back button")}
  const onMenuPress = () => {console.log("Click menu button")}

  return (
    <View style={styles.navbartop}>
      <Pressable onPress={onBackPress} style={styles.iconContainer}>
        <Image
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable onPress={onMenuPress} style={styles.iconContainer}>
        <Image
          contentFit="cover"
          source={require("../assets/frame-45.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryPrimary,
    padding: Padding.p_8xs,
    height: 35,
    width: 35,
  },
  navbartop: {
    width: 380,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
  },
});

export default NavbarTop;