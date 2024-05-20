import React from "react";
import { useState } from "react";
import { StyleSheet, Image, Pressable, Modal, SafeAreaView, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { Border, Padding } from "../../GlobalStyles";
import { useNavigation, useTheme } from "@react-navigation/native";
import SettingsMenu from "./SettingsMenu";

const NavbarTop = () => {

  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { colors } = useTheme();

  const onBackPress = () => {
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];
    if (navigation.canGoBack() && (prevRoute != null)) navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.navbartop}>
      <Pressable onPress={onBackPress} style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
        <Image
          contentFit="cover"
          source={require("../../assets/vector.png")}
        />
      </Pressable>
      <Pressable onPress={() => { setIsModalVisible(true) }} style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
        <Image
          contentFit="cover"
          source={require("../../assets/frame-45.png")}
        />
      </Pressable>
      <Modal
        visible={isModalVisible}
        transparent={true}
      >
        <TouchableOpacity onPressOut={() => setIsModalVisible(false)}
          style={{ flex: 1 }}>
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
    padding: Padding.p_8xs,
    height: 35,
    width: 35,
  },
  navbartop: {
    // width: "100%",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
});

export default NavbarTop;