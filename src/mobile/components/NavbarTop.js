import React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, Pressable, Modal, SafeAreaView } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import SettingsMenu from "./SettingsMenu";

const NavbarTop = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onBackPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  const onMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.navbartop}>
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
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)} // Xử lý khi người dùng nhấn nút back trên thiết bị
      >
        <Pressable style={{}} onPress={() => setIsModalVisible(false)}>
          <SafeAreaView>
           <SettingsMenu />
          </SafeAreaView>
        </Pressable>
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
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
  },
});

export default NavbarTop;