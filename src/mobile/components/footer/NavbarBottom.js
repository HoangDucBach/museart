import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Image, Animated } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color, ColorDark } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { toggleTab } from "../../store";


const NavbarBottom = () => {

  const navigation = useNavigation();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const selectedTab = useSelector(state => state.tab.tab);
  const move = useSelector(state => state.gesture.move);
  const dispatch = useDispatch();

  const moveAnim = useRef(new Animated.Value(1)).current;

  if (move == 1) {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
  else if (move == -1) {
    Animated.timing(moveAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  const handleTabPress = (tab) => {
    if (tab != selectedTab) {
      dispatch(toggleTab(tab));
      navigation.navigate(tab);
    }
  }

  if (move == 0) return null;

  return (
    <Animated.View style={[styles.navbarbottom, { transform: [{ translateY: moveAnim }] }, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainer } : null]}>
      <Pressable onPress={() => { handleTabPress("Artworks") }}
        style={[styles.navbaritemFlexBox, selectedTab == "Artworks" && [styles.navbaritem, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={isDarkMode ? require("../../assets/artworkDark.png") : require("../../assets/artworkicon.png")}
        />
        {selectedTab == "Artworks" && <Text style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Artworks</Text>}
      </Pressable>
      <Pressable onPress={() => { handleTabPress("Exhibitions") }}
        style={[styles.navbaritemFlexBox, selectedTab == "Exhibitions" && [styles.navbaritem, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={isDarkMode ? require("../../assets/Frame32.png") : require("../../assets/frame-32.png")}
        />
        {selectedTab == "Exhibitions" && <Text style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Exhibitions</Text>}
      </Pressable>
      <Pressable onPress={() => { handleTabPress("Articles") }}
        style={[styles.navbaritemFlexBox, selectedTab == "Articles" && [styles.navbaritem, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={isDarkMode ? require("../../assets/Frame33.png") : require("../../assets/articleicon.png")}
        />
        {selectedTab == "Articles" && <Text style={[styles.textLayout, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Articles</Text>}
      </Pressable>
      <Pressable onPress={() => { handleTabPress("Shopping") }}
        style={[styles.navbaritemFlexBox, selectedTab == "Shopping" && [styles.navbaritem, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={isDarkMode ? require("../../assets/Frame34.png") : require("../../assets/shoppingicon.png")}
        />
        {selectedTab == "Shopping" && <Text style={[styles.textLayout, , isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>Shopping</Text>}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navbaritemFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
  },
  navbaritemChild: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  textLayout: {
    fontSize: FontSize.labelLargeBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelMediumBold,
    color: Color.surfaceOnSurface,
    textAlign: "left",
    marginLeft: 10,
  },
  navbaritem: {
    backgroundColor: Color.surfaceSurfaceContainerHighest,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
  },
  navbarbottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Color.surfaceSurfaceContainer,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    margin: 5,
  },
});

export default NavbarBottom;
