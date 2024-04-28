import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Image, Pressable, Modal, SafeAreaView, Dimensions, StatusBar } from "react-native";
import { Border, Color, ColorDark, Padding } from "../../GlobalStyles";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import SettingsMenu from "./SettingsMenu";
import { toggleMove, toggleTab } from "../../store";

const NavbarTop = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const routes = useNavigationState(state => state.routes);


  const onBackPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else return;

    const previousTab = routes[routes.length - 2].name;
    console.log(previousTab);
    dispatch(toggleTab(previousTab));
    if (previousTab == "SignIn" || previousTab == "SignUp" || previousTab == "Payment") dispatch(toggleMove(-1));
    else dispatch(toggleMove(1));
  };

  const onMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.navbartop}>
      <Pressable onPress={onBackPress} style={[styles.iconContainer, isDarkMode ? { backgroundColor: ColorDark.primaryPrimary } : null]}>
        <Image
          contentFit="cover"
          source={require("../../assets/vector.png")}
        />
      </Pressable>
      <Pressable onPress={onMenuPress} style={[styles.iconContainer, isDarkMode ? { backgroundColor: ColorDark.primaryPrimary } : null]}>
        <Image
          contentFit="cover"
          source={require("../../assets/frame-45.png")}
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
    // width: "100%",
    marginHorizontal: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
  },
});

export default NavbarTop;