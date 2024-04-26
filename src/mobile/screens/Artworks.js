import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavbarTop from "../components/NavbarTop";
import DashboardSearchEngine from "../components/DashboardSearchEngine";
import FrameComponent1 from "../components/FrameComponent11";
import NavbarBottom from "../components/NavbarBottom";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";
import ButtonPrimary from "../components/ButtonPrimary";
import SettingsMenu from "../components/SettingsMenu";

const Artworks = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.artworks}>
      <NavbarTop/>
      <View style={styles.body}>
        <View style={styles.dashboardtitleFlexBox}>
          <Text style={styles.dashboard}>Dashboard</Text>
        </View>
        <DashboardSearchEngine />
        {/*<View style={[styles.dashboardmain, styles.titleParentFlexBox]}>
          <View style={[styles.instanceParent, styles.dashboardtitleFlexBox]}>
            <FrameComponent1
              onFramePressablePress={() =>
                navigation.navigate("ArtworksArtwork")
              }
            />
            <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
            <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameWrapperSpaceBlock]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperLayout]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
            <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
            <View style={[styles.frameWrapper3, styles.frameWrapperSpaceBlock]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
            <View style={[styles.frameWrapper3, styles.frameWrapperSpaceBlock]}>
              <View style={styles.titleParentFlexBox}>
                <Text style={[styles.title, styles.titleClr]}>Title</Text>
                <Text style={[styles.title1, styles.titleClr]}>Title</Text>
              </View>
            </View>
          </View>
            </View>*/}
      </View>
      <SettingsMenu/>
      <ButtonPrimary 
        text="Button"
        textMarginLeft={10}
        buttonPrimaryBackgroundColor={Color.primaryPrimary}
        image={require("../assets/shoppingicon.png")}
        buttonPrimaryAlignSelf="center"/>
      <NavbarBottom tab = "Artworks"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  artworks: {
    backgroundColor: Color.surfaceSurfaceContainer,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "scroll",
  },
  dashboardtitleFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
    dashboard: {
    fontSize: FontSize.headline5Bold_size,
    color: Color.surfaceOnSurface,
    textAlign: "left",
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    flex: 1,
  },
  instanceParent: {
    flexWrap: "wrap",
    overflow: "hidden",
    flexDirection: "row",
    flex: 1,
  },
  titleParentFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameWrapperSpaceBlock: {
    marginLeft: 10,
    justifyContent: "flex-end",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  titleClr: {
    color: Color.primaryOnPrimary,
    textAlign: "left",
  },
  frameWrapperLayout: {
    height: 282,
    marginLeft: 10,
    justifyContent: "flex-end",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.titleMediumBold_size,
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
    color: Color.primaryOnPrimary,
  },
  title1: {
    fontSize: FontSize.labelMediumBold_size,
    fontWeight: "300",
    fontFamily: FontFamily.labelLargeMedium,
    marginTop: 5,
  },
  frameWrapper: {
    height: 113,
    width: 128,
  },
  frameView: {
    width: 371,
    height: 258,
  },
  frameWrapper1: {
    width: 128,
  },
  frameWrapper2: {
    width: 233,
  },
  frameWrapper3: {
    height: 124,
    width: 128,
  },
  dashboardmain: {
    marginTop: 15,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  body: {
    alignSelf: "stretch",
    padding: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Artworks;
