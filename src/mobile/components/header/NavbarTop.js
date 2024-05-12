import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Image, Pressable, Modal, SafeAreaView, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { Border, Color, ColorDark, Padding } from "../../GlobalStyles";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import SettingsMenu from "./SettingsMenu";
import { toggleMove, toggleTab } from "../../store";

const NavbarTop = () => {

  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const onBackPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else return;
  };

  return (
    <SafeAreaView style={styles.navbartop}>
      <Pressable onPress={onBackPress} style={[styles.iconContainer, isDarkMode ? { backgroundColor: ColorDark.primaryPrimary } : null]}>
        <Image
          contentFit="cover"
          source={require("../../assets/vector.png")}
        />
      </Pressable>
      <Pressable onPress={() => { setIsModalVisible(true) }} style={[styles.iconContainer, isDarkMode ? { backgroundColor: ColorDark.primaryPrimary } : null]}>
        <Image
          contentFit="cover"
          source={require("../../assets/frame-45.png")}
        />
      </Pressable>
      <Modal
        visible={isModalVisible}
        transparent={true}
      >
        <TouchableOpacity onPressOut={() => setIsModalVisible(false)} >
          <SettingsMenu />
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
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
    // width: "100%",
    marginHorizontal: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
});

export default NavbarTop;