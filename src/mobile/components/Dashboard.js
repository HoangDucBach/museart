import * as React from "react";
import { useSelector } from "react-redux";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import NavbarTop from "../components/NavbarTop";
import DashboardSearchEngine from "../components/DashboardSearchEngine";
import { Color, Border, Padding, FontSize, FontFamily, ColorDark } from "../GlobalStyles";

const Dashboard = ({
    namePage,
    children,

}) => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

    return (
    <SafeAreaView style={[styles.artworks, isDarkMode ?  {backgroundColor: ColorDark.surfaceSurfaceContainer} : null]}>
      {/* <View style={{paddingHorizontal: 10}}> */}
        <NavbarTop/>
      {/* </View> */}
      <View style={styles.body}>
        <View style={styles.dashboardtitleFlexBox}>
          <Text style={[styles.dashboard, isDarkMode ? {color: ColorDark.surfaceOnSurface} : null]}>{namePage}</Text>
        </View>
        <DashboardSearchEngine />
      </View>
      <ScrollView style={{padding: 10, paddingBottom: 20, alignSelf: "stretch",}}>{children}</ScrollView>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  artworks: {
    padding: Padding.p_3xs,
    backgroundColor: Color.surfaceSurfaceContainer,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "scroll",
  },
  dashboardtitleFlexBox: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
  dashboard: {
    fontSize: FontSize.headline5Bold_size,
    color: Color.surfaceOnSurface,
    textAlign: "left",
    fontFamily: FontFamily.labelMediumBold,
    fontWeight: "700",
  },
  body: {
    alignSelf: "stretch",
    padding: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Dashboard;