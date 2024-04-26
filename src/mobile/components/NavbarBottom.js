import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
// import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color, ColorDark } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const NavbarBottom = ({tab}) => 
{

  const navigation = useNavigation();
  const isDarkMode = useSelector(state => state.isDarkMode);

  const [selectedTab, setSelectedTab] = useState(tab);
  console.log("Open tab: " + selectedTab);

  const handleTabPress = (tab) =>
  {
    if (tab != selectedTab) {
      setSelectedTab(tab);
      navigation.navigate(tab);
    }
  }

  return (
    <View style={[styles.navbarbottom, isDarkMode ?  {backgroundColor: ColorDark.surfaceSurfaceContainer} : null]}>
      <Pressable onPress= {() => {handleTabPress("Artworks")}}
                style={[styles.navbaritemFlexBox, selectedTab == "Artworks" && [styles.navbaritem, isDarkMode ?  {backgroundColor: ColorDark.surfaceSurfaceContainerHighest} : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={require("../assets/artworkicon.png")}
        />
        { selectedTab == "Artworks" && <Text style={[styles.textLayout, isDarkMode ? {color: ColorDark.surfaceOnSurface} : null]}>Artworks</Text>}
      </Pressable>
      <Pressable onPress= {() => {handleTabPress("Exhibitions")}}
                style={[styles.navbaritemFlexBox, selectedTab == "Exhibitions" && [styles.navbaritem, isDarkMode ?  {backgroundColor: ColorDark.surfaceSurfaceContainerHighest} : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={require("../assets/frame-32.png")}
        />
        { selectedTab == "Exhibitions" && <Text style={[styles.textLayout, isDarkMode ? {color: ColorDark.surfaceOnSurface} : null]}>Exhibitions</Text>}
      </Pressable>
      <Pressable onPress= {() => {handleTabPress("Articles")}}
                style={[styles.navbaritemFlexBox, selectedTab == "Articles" && [styles.navbaritem, isDarkMode ?  {backgroundColor: ColorDark.surfaceSurfaceContainerHighest} : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={require("../assets/articleicon.png")}
        />
        { selectedTab == "Articles" && <Text style={[styles.textLayout, isDarkMode ? {color: ColorDark.surfaceOnSurface} : null]}>Articles</Text>}
      </Pressable>
      <Pressable onPress= {() => {handleTabPress("Shopping")}}
                style={[styles.navbaritemFlexBox, selectedTab == "Shopping" && [styles.navbaritem, isDarkMode ?  {backgroundColor: ColorDark.surfaceSurfaceContainerHighest} : null]]}>
        <Image
          style={styles.navbaritemChild}
          contentFit="cover"
          source={require("../assets/shoppingicon.png")}
        />
        { selectedTab == "Shopping" && <Text style={[styles.textLayout, , isDarkMode ? {color: ColorDark.surfaceOnSurface} : null]}>Shopping</Text>}
        </Pressable>
    </View>
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
    backgroundColor: Color.surfaceSurfaceContainer,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    margin: 10,
  },
});

export default NavbarBottom;
