import * as React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Image, TextInput, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding, ColorDark } from "../../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../services/api";

const DashboardSearchEngine = ({ children }) => {

  const onFrame41Press = () => { console.log("press frame-41") }
  const onFrame40Press = () => { console.log("press frame-40") }
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const route = useRoute();

  React.useEffect(() => { if (route.name == "ArtworkScreen") console.log('iu') }, [])

  return (

    <View style={[styles.dashboardsearchengine, isDarkMode ? { backgroundColor: ColorDark.surfaceSurfaceContainerHighest } : null]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../../assets/vector1.png")}
      />
      <TextInput placeholder="Search picture, product, . . ." placeholderTextColor="#534341" style={[styles.searchPictureProduct, isDarkMode ? { color: ColorDark.surfaceOnSurfaceVarient } : null]} />

      <Pressable onPress={onFrame40Press}>
        <Image
          style={styles.dashboardsearchengineChild}
          contentFit="cover"
          source={require("../../assets/frame-40.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 20,
    height: 20,
  },
  searchPictureProduct: {
    flex: 1,
    fontSize: FontSize.labelMediumBold_size,
    fontFamily: FontFamily.typographyLabelLarge,
    color: Color.surfaceOnSurfaceVarient,
    textAlign: "left",
    marginLeft: 10,
  },
  dashboardsearchengineChild: {
    width: 25,
    height: 25,
  },
  dashboardsearchengine: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.surfaceSurfaceContainerHighest,
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
});

export default DashboardSearchEngine;
