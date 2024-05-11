import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Image, Animated, TouchableOpacity } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color, ColorDark } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { toggleTab } from "../../store";


const NavbarBottom = ({ state, descriptors, navigation }) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  return (

    <View style={[styles.navbarbottom, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainer } : null]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        let iconPath;
        if (route.name === "Artworks") {
          iconPath = isDarkMode ? require("../../assets/artworkDark.png") : require("../../assets/artworkicon.png")
        }
        if (route.name === "Exhibitions") {
          iconPath = isDarkMode ? require("../../assets/Frame32.png") : require("../../assets/frame-32.png")
        }
        if (route.name === "Articles") {
          iconPath = isDarkMode ? require("../../assets/Frame33.png") : require("../../assets/articleicon.png")
        }
        if (route.name === "Shopping") {
          iconPath = isDarkMode ? require("../../assets/Frame34.png") : require("../../assets/shoppingicon.png")
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.navbaritemFlexBox, isFocused && [styles.navbaritem, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]]}
          >
            <Image
              style={styles.navbaritemChild}
              contentFit="cover"
              source={iconPath}
            />
            {isFocused ? <Text className={'pl-1 text-white font-playfairBold'}>{label}</Text> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

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
  navbaritem: {
    backgroundColor: Color.surfaceSurfaceContainerHighest,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
  },
  navbarbottom: {
    backgroundColor: Color.surfaceSurfaceContainer,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    margin: 5,
  },
});


export default NavbarBottom;
