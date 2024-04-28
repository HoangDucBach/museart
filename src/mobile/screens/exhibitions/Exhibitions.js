import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../../GlobalStyles";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import SettingsMenu from "../../components/header/SettingsMenu";
import Dashboard from "../../components/header/Dashboard";
import Comment from "../../components/Comment";
import FrameComponent from "../../components/FrameComponent";

const Exhibitions = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Dashboard namePage={"Exhibitions"}>
        {/* <SettingsMenu style={{paddingTop: 10}}/> */}
        <View style={{ justifyContent: "space-around", flexDirection: "row", }}>
          <FrameComponent />
          <FrameComponent frameFlex={1.3} frameAspectRatio={1} />
          <FrameComponent frameFlex={1.3} frameAspectRatio={1} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <FrameComponent frameAspectRatio={1.5} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <FrameComponent />
          <FrameComponent frameFlex={2} frameAspectRatio={1} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <FrameComponent frameFlex={2} frameAspectRatio={2} />
          <FrameComponent />
        </View>
        <Comment userName={"Luong"} date={"20/04/2024"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived "} />
        <Comment userName={"Luong"} date={"20/04/2024"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived "} />
        <Comment userName={"Luong"} date={"20/04/2024"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived "} />
      </Dashboard>
    </View>
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

export default Exhibitions;
