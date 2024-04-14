import * as React from "react";
// import { Image } from "expo-image";
import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { Padding, Color, FontSize, Border, FontFamily } from "../GlobalStyles";
import ButtonPrimary from "./ButtonPrimary";

const SettingsMenu = () => {
  return (
    <View style={styles.settingsMenu}>
      <MenuItem imageSource={require("../assets/explore.png")} text="About" />
      <MenuItem imageSource={require("../assets/navbaritem.png")} text="Setting" />
      <MenuItem imageSource={require("../assets/frame-14.png")} text="Cart" />
      <MenuItem imageSource={require("../assets/frame-141.png")} text="Feedback" />
      <View style={[styles.flexRow, styles.flexRowButton]}> 
        <ButtonPrimary text="Sign in"
                        textSize={FontSize.labelLargeBold_size}
                        textMargin={8}
                        buttonPrimaryFlex={1} 
                        />
        <ButtonPrimary text="Sign up" 
                       textSize={FontSize.labelLargeBold_size}
                       buttonPrimaryBackgroundColor={Color.primaryPrimaryFixed}
                       buttonPrimaryMarginLeft={15}
                       buttonPrimaryFlex={1} 
                       />
      </View>
      <View style={styles.ellipseParent}>
        <Image source={require("../assets/ellipse-3.png")} />
        <Image source={require("../assets/ellipse-41.png")} />
      </View>
    </View>
  );
};

const MenuItem = ({ imageSource, text }) => {
  return (
    <Pressable style={[styles.menuItem, styles.flexRow]}>
      <Image style={styles.menuItemImage} source={imageSource} />
      <Text style={styles.menuItemText}>{text}</Text>
    </Pressable>
  );
};

const Button = ({ label, backgroundColor, marginLeft }) => {
  return (
    <Pressable style={[styles.button, { backgroundColor, marginLeft }]}>
      <Text style={styles.buttonText}>{label}</Text>
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
    // fontWeight: 500,
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
