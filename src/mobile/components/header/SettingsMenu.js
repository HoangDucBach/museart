import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import { Padding, Color, ColorDark, FontSize, Border, FontFamily } from "../../GlobalStyles";
import ButtonPrimary from "../button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { toggleMove, toggleTab, toggleTheme } from "../../store";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const SettingsMenu = () => {
  const { logout, userToken, userInfo } = useContext(AuthContext);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch(toggleTheme());
  };

  return (
    <View style={[styles.settingsMenu, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHigh } : null]}>
      <MenuItem isDarkMode={isDarkMode} imageSource={isDarkMode ? require("../../assets/Explore2.png") : require("../../assets/explore.png")} text="About" />
      <MenuItem isDarkMode={isDarkMode} imageSource={isDarkMode ? require("../../assets/item.png") : require("../../assets/navbaritem.png")} text="Setting" />
      <MenuItem isDarkMode={isDarkMode} imageSource={isDarkMode ? require("../../assets/Frame14.png") : require("../../assets/frame-14.png")} text="Cart" func={() => {
        navigation.navigate("Cart");
      }} />
      <MenuItem isDarkMode={isDarkMode} imageSource={isDarkMode ? require("../../assets/Frame15.png") : require("../../assets/frame-141.png")} text="Feedback" />
      {userToken != null &&
        <MenuItem isDarkMode={isDarkMode} imageSource={isDarkMode ? require("../../assets/Explore2.png") : require("../../assets/explore.png")} text={userInfo.user.email} />
      }
      {userToken == null ?
        <View style={[styles.flexRow, styles.flexRowButton]}>
          <ButtonPrimary text="Sign in"
            textSize={FontSize.labelLargeBold_size}
            textMargin={8}
            buttonPrimaryFlex={1}
            onPressButton={() => { navigation.navigate("SignIn") }}
          />
          <ButtonPrimary text="Sign up"
            textSize={FontSize.labelLargeBold_size}
            buttonPrimaryBackgroundColor={Color.primaryPrimaryFixed}
            buttonPrimaryMarginLeft={15}
            buttonPrimaryFlex={1}
            onPressButton={() => { navigation.navigate("SignUp") }}
          />
        </View> :
        <View style={[styles.flexRow, styles.flexRowButton]}>
          <ButtonPrimary text="Logout"
            textSize={FontSize.labelLargeBold_size}
            textMargin={8}
            buttonPrimaryFlex={1}
            onPressButton={() => { logout() }}
          />
        </View>
      }
      <View style={{ justifyContent: "center", alignItems: "center", alignSelf: "center" }} >
        <Switch
          trackColor={{ false: '#81b0ff', true: '#767577' }}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f5dd4b'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

const MenuItem = ({ isDarkMode, imageSource, text, func }) => {
  return (
    <Pressable onPress={func} style={[styles.menuItem, styles.flexRow]}>
      <Image style={styles.menuItemImage} source={imageSource} />
      <Text style={[styles.menuItemText, isDarkMode ? { color: ColorDark.surfaceOnSurface } : null]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    padding: 10,
    marginTop: 10,

  },
  menuItemImage: {
    width: 25,
    height: 25,
  },
  menuItemText: {
    marginLeft: 10,
    fontFamily: FontFamily.labelLargeMedium,
    fontSize: FontSize.labelLargeBold_size,
    color: Color.surfaceOnSurface,
    fontWeight: "500",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexRowButton: {
    // margin: 5,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  ellipseParent: {
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    shadowRadius: 5,
    elevation: 5,
    padding: Padding.p_8xs,
    alignItems: "center",
    backgroundColor: Color.surfaceSurfaceContainerHigh,
    marginTop: 10,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: Color.colorBlack,
  },
  settingsMenu: {
    alignSelf: "flex-end",
    marginTop: 50,
    marginLeft: 10,
    backgroundColor: Color.surfaceSurfaceContainer,
    shadowRadius: 20,
    elevation: 20,
    width: 237,
    padding: Padding.p_3xs,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
});

export default SettingsMenu;
